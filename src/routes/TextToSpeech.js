import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const convertToSpeech = async () => {
    try {

      const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
      };   
      const response = await axios.post(`${BASE_URL}/api/convert_text_to_speech`, { text });
      setAudioUrl(URL.createObjectURL(response.data));      
    } catch (error) {
      console.error('Error converting text to speech:', error);
    }
  };

  return (
    <div>
      <div> <h2>Text to Speech  Converter</h2> </div>
      <textarea
        placeholder="Enter text to convert to speech"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={convertToSpeech}>Convert to Speech</button>
      <div>
        {audioUrl && (
            <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>
        )}
      </div>
      
    </div>
  );
};

export default TextToSpeech;
