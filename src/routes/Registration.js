import React, { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  //const BASE_RUL = 'http://localhost:3001'
  const BASE_RUL = 'https://0ca3-2405-201-c032-b1d4-fd1b-ed52-4f9f-2406.ngrok-free.app';

  // Function to handle registration
  const handleRegistration = async () => {
    console.log("handleRegistration");
    try {
      const response = await fetch(`${BASE_RUL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

 
  // Function to access a protected resource
  const accessProtectedResource = async () => {
    try {
      const tokenFromStorage = localStorage.getItem('token');
      
      if (!tokenFromStorage) {
        console.error('Token not found in localStorage');
        return;
      }

      const response = await fetch('/api/protected', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenFromStorage}`,
        },
      });

      if (response.ok) {
        // Handle the response here
        console.log('Access granted');
      } else {
        console.error('Access denied');
      }
    } catch (error) {
      console.error('Error accessing protected resource:', error);
    }
  };

  return (
    <div className='inputCenter'>
      
      <h2>Registration</h2>
      <div className='inputs'>
      <label>User Name :</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <label>Email :</label>
         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />       
      </div>  
      <button onClick={handleRegistration}>Register</button>    
    </div>
  );
};

export default Registration;
