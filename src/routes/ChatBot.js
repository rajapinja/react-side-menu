import React, { useState } from 'react';
import axios from 'axios';


const BASE_RUL ='http://127.0.0.1:5001';

function ChatBot() {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [chatResponse, setChatResponse] = useState('');

  const playVideo = async () => {
    try {
      await axios.post(`${BASE_RUL}/api/play-video`);
      setVideoPlayed(true);
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  const chat = async () => {
    try {
      const response = await axios.post(`${BASE_RUL}/api/chat`, { message: 'Hello' });
      setChatResponse(response.data.message);
    } catch (error) {
      console.error('Error interacting with chatbot:', error);
    }
  };

  return (
    <div>
      <button onClick={playVideo}>Play Video</button>
      {videoPlayed && <p>Video played successfully!</p>}
      
      <button onClick={chat}>Chat</button>
      {chatResponse && <p>Chatbot Response: {chatResponse}</p>}
    </div>
  );
}

export default ChatBot;
