// import React, { useState, useEffect } from 'react';
// //import io from 'socket.io-client';

// function ChatApp() {
//   const [message, setMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);
//   //const socket = io('http://127.0.0.1:5001');

//   useEffect(() => {
//     socket.on('message', (data) => {
//       // Handle incoming messages here
//       setChatMessages((prevMessages) => [...prevMessages, data]);
//     });
//   }, []);

//   const sendMessage = () => {
//     // Send the message to the server
//     socket.emit('message', message);

//     // Clear the input field
//     setMessage('');
//   };

//   return (
//     <div >
//       <h2>Chat App</h2>
//       {/* Render chat messages here */}
//       <div className="chat-messages">
//         {chatMessages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       {/* Message input and "Send" button */}
//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default ChatApp;
