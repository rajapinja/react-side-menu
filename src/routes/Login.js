import React, { useRef, useState, useEffect, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const inputs = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '0 0 0 5px',
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //const BASE_RUL = 'http://localhost:3001'
  const BASE_RUL = 'https://0ca3-2405-201-c032-b1d4-fd1b-ed52-4f9f-2406.ngrok-free.app';

  // const {setAuth} = useAuth({});

  // const navigate = useNavigate(); 
  // const location = useLocation();
  // const from = location.state?.form?.pathname || '/';
  
  // const userRef = useRef(null); // allows to set focus on user input when component loads
  // const errRef = useRef(); // allows to set focus on that when error occurs to allow screen readers to announce error for accessibility.

  // // Check for Login status
  // const [Status, setStatus] = useState("");

  //  // User field state
  //  const [user, setUser] = useState('');
  //  // Password Field State
  //  const [pwd, setPwd] = useState('');
  //  // Error state if error occurs and success state if it's a success
  //  const [errMsg, setErrMsg] = useState('');
   //const [success, setSuccess] = useState(false);
  
  
  // useEffect(() => {
  //   // set focus when component loads
  //   userRef.current.focus();
  // }, []);

  
  // useEffect(() => {
  //      // clear errMsg when user corrects the error in the user or pwd fields
  //   setErrMsg('');
  // }, [username, password]);


   // Function to handle login
  const handleLogin = async () => {
    try {
     
      const response = await fetch(`${BASE_RUL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const jwtToken = data.token;

        localStorage.clear();
        // Store the JWT token in localStorage
        localStorage.setItem('token', jwtToken);
        
        setToken(jwtToken);
        console.log('Login successful');

        //console.log("response.data.username", data.user);

        // if(data.user === username){
        //   setAuth({ user, password, jwtToken });           
        //   setUser(data.user);
        //   setStatus("login");
        //   navigate(from, { replace: true }); // replaces the success page for the login page. takes the user where they wanted to go previously.
        // }else{
        //   setStatus(data.message);       
        // }
        // setUser('');
        // setPwd('');
        // localStorage.setItem('user', data.user);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
      {/* <h1>Freelancer and Remoteworker Collaboration Platform</h1> */}

      <h2 >Login</h2>
      <div className='inputs'>
        <label>User Name :</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          //ref={userRef}
        />
         <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />    
       
      </div>
      <button onClick={handleLogin}>Login</button>

      {token && (
        <div>
          <h2>JWT Token</h2>
          <p>{token}</p>
          <button onClick={accessProtectedResource}>Access Protected Resource</button>
        </div>
      )}
    </div>
  );
};

export default Login;
