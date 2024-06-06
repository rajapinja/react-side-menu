import React, { useState } from 'react';


const BASE_URL = 'http://localhost:5000';


function SpeechToText() {
  const [transcription, setTranscription] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isRecording, setIsRecording] = useState(false);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleStartRecording = async () => {
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };   

      fetch(`${BASE_URL}/api/microphone_start_recording`, {
        method: 'POST',        
        // headers: headers, // You can include headers here if needed
      })
      .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }         
          return response.json(); // Parse the JSON response
      })
      .then((data) => {
          // Handle the JSON data here
          console.log('Response data:',data);
          setMessage(data.message); // Assuming `result` is the key in your JSON response
          setIsRecording(true);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    };

    const handleStopRecording = async () => {    
      const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };   
  
        fetch(`${BASE_URL}/api/microphone_stop_recording`, {
          method: 'POST',        
          // headers: headers, // You can include headers here if needed
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }         
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            // Handle the JSON data here
            console.log('Response data:',data);
            setMessage(data.message); // Assuming `result` is the key in your JSON response
            setIsRecording(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      };


  const handleTranscription = async () => {
    const formData = new FormData();
    formData.append('audio', audioFile);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };   

      fetch(`${BASE_URL}/api/speech-to-text`, {
        method: 'POST',
        body: formData,
        // headers: headers, // You can include headers here if needed
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }         
          return response.json(); // Parse the JSON response
        })
        .then((data) => {
          // Handle the JSON data here
          console.log('Response data:',data);
          setTranscription(data.result); // Assuming `result` is the key in your JSON response
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };

  return (
    <div>
      <h2>Speech to Text Converter</h2>
      <div>
        <button onClick={isRecording ? handleStopRecording : handleStartRecording}>
          {isRecording ? (
            <span>Stop Recording</span>
          ) : (
            <span>Start Recording</span>
          )}
          {isRecording && <span> (Recording...)</span>}         
        </button>
        <div>
            {message!==null && <span>{message}</span>}
        </div>
        {/* <span><button onClick={handleStartRecording}>Start Recording</button></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          {message!==null && <span>{message}</span>}
        </div>
        <span><button onClick={handleStopRecording}>Stop Recording</button></span>
        <div>
          {message!==null && <span>{message}</span>}
        </div> */}
      </div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleTranscription}>Convert</button>
      <div>
        <h2>Transcription:</h2>
        <p>{transcription}</p>
      </div>
    </div>
  );
}

export default SpeechToText;
