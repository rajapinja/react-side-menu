import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const VideoCall = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [stream, setStream] = useState(null);
  const videoRef = useRef();
  const peerRef = useRef();
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  

    // Initialize socket.io connection
    const socket = io('http://127.0.0.1:5002');

  useEffect(() => {  

    // Request access to camera and microphone
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((userStream) => {
        setStream(userStream);        
        videoRef.current.srcObject = userStream;

        // Handle incoming video call requests
        socket.current.on('incoming-call', (data) => {
          // Create a peer connection
          const peer = new SimplePeer({ initiator: false, stream: userStream });

          // Handle peer events (signaling, stream, data)
          peer.current.on('signal', (signalData) => {
            // Send signal data to the caller
            socket.emit('accept-call', signalData);
          });

          peer.current.on('stream', (remoteStream) => {
            // Display the remote stream
            // You can append it to a video element
            //const remoteVideo = document.getElementById('remote-video');
           // remoteVideo.srcObject = remoteStream;
             // Display remote stream in video element
             const remoteVideo = document.createElement('video');
             remoteVideo.srcObject = userStream;
             document.getElementById('remote-videos').appendChild(remoteVideo);
          });

          peerRef.current.on('data', (data) => {
            // Handle incoming data from the other participant
            // For example, you can display chat messages
            setChatMessages([...chatMessages, data.toString()]);
          });

          // Send a chat message to the caller
          peerRef.current.send('Hello from the other side!');
        });

            // Handle incoming signal data after accepting a call
            socket.current.on('signal', (signalData) => {
              // Pass the signal data to the peer connection
              peerRef.current.signal(signalData);
            });
          })
          .catch((error) => console.error(error));

        return () => {
          // Clean up when the component unmounts
          if (peerRef.current) {
            peerRef.current.destroy();
          }
          if (socket.current) {
            socket.disconnect();
          }
        };
      }, [chatMessages]);

  const startCall = () => {
    // Emit an event to request a video call
    socket.emit('start-call');
  };

  const sendMessage = () => {
    if (peerRef.current) {
      // Send a chat message to the other participant
      peerRef.current.send(message);
      setChatMessages([...chatMessages, message]);
      setMessage('');
    }
  };

  const toggleMute = () => {
    const audioTrack = videoRef.current.srcObject.getAudioTracks()[0];
    audioTrack.enabled = !audioTrack.enabled;
    setIsMuted(!audioTrack.enabled);
  };

  const toggleCamera = () => {
    const videoTrack = videoRef.current.srcObject.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;
    setIsCameraOff(!videoTrack.enabled);
  };

  const endCall = () => {
    // Emit a "leave-room" event to the server
    socket.emit('leave-room', 'room-123', 'user-123');
    
    // Disconnect from the signaling server
    socket.disconnect();
    
    // Destroy the peer connection if it's still active
    if (peerRef.current) {
      peerRef.current.destroy();
    }
  };

  return (
    <div>      
      <div>
      <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      <button onClick={toggleCamera}>{isCameraOff ? 'Turn On Camera' : 'Turn Off Camera'}</button>
      <button onClick={endCall}>End Call</button>
    </div>
      {/* Video call interface */}
      <button onClick={startCall}>Start Call</button>
      <div id="remote-video">
        {/* Remote video stream */}
      </div>

      {/* Chat interface */}
      <div>
        <div>
          {chatMessages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <video ref={socket} autoPlay muted></video>    {/* <div id="remote-videos"></div> */} 
      <div id="remote-video">
        {/* Remote video stream */}
      </div>

    </div>
  );
};

export default VideoCall;
