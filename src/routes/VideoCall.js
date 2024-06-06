import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const socket = io('http://localhost:5000');

function VideoCall() {
  const videoRef = useRef();
  const peerRef = useRef();
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  //const [stream, setStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        socket.emit('join-room', 'room-123', 'user-123');

        socket.on('user-connected', (userId) => {
          const peer = new SimplePeer({ initiator: true, trickle: false, stream });

          peer.on('signal', (data) => {
            
            socket.emit('offer', userId, data);
          });

          peer.on('data', (data) => {
            // Handle incoming data
            setChatMessages([...chatMessages, data.toString()]);
          });

          peer.on('stream', (userStream) => {
            // Display remote stream in video element
            const remoteVideo = document.createElement('video');
            remoteVideo.srcObject = userStream;
            document.getElementById('remote-videos').appendChild(remoteVideo);
          });

          peerRef.current = peer;
        });

        socket.on('user-disconnected', (userId) => {
          if (peerRef.current) {
            peerRef.current.destroy();
          }
        });
      })
      .catch((error) => console.error(error));
  }, []);

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
      
      <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      <button onClick={toggleCamera}>{isCameraOff ? 'Turn On Camera' : 'Turn Off Camera'}</button> 
     {/* Video call interface */}
     <button onClick={startCall}>Start Call</button>
     <button onClick={endCall}>End Call</button>
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
          onChange={(e) =>setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <video ref={videoRef} autoPlay muted></video>    {/* <div id="remote-videos"></div> */}
      <div id="remote-videos">
        {/* Remote video stream */}
      </div>
  </div>
  );
}

export default VideoCall;
