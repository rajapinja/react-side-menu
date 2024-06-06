import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BASE_URL='http://127.0.0.1:3001';


const Matches = () => {
  const [matchesData, setMatchesData] = useState([]);
  const [errMsg, setErrMsg] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

   useEffect(() => {
        //     axios
        //       .get(`${BASE_URL}api/get-matches`) // Replace with your Python backend URL
        //       .then((response) => {        
        //         setMatchesData(response.data);
        //         setLoading(false);
        //         console.log("response.data :", response.data.Matches);
        //       })
        //       .catch((error) => {
        //         console.error('Error fetching data:', error);
        //         setLoading(false);
        //       });
    handleSkillMatches();// Auto call the handleSkillMatches() method
   }, [token]);

  const handleSkillMatches = async () => {  
    try {
      setErrMsg('');
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          };
  
          const response = await axios.get(`${BASE_URL}/api/get-matches`, { headers });
          // Handle the response data here
          const { matches } = response.data;
          setMatchesData(matches);
          console.log("Matches :", response.data);
          if (response.status === 401 && response.statusText === 'Unauthorized') {
            setErrMsg('JWT token has expired. Please log in again.');
          // }else{
          //   setErrMsg(response.statusText); 
          }   
     } catch (err) {
      console.error('Error:', err);
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) { 
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized, JWT token might have expired, Please login again');
      } else if (err.response?.status === 500) {
        setErrMsg('Error fetching Data from Server');
      } else {
        setErrMsg('An unexpected error occurred. Please try again later.');
      }
    }      
  }

  return (
    <div>
      <h2>Skill Match</h2>     
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Freelancer Id</TableCell>
              <TableCell>Job Id</TableCell>
              <TableCell>Skills Match Score</TableCell>             
            </TableRow>
          </TableHead>
          <TableBody>
            {matchesData.map((match) => (
              <TableRow>
                <TableCell>{match.freelancer_id}</TableCell>               
                <TableCell>{match.job_id}</TableCell>   
                <TableCell>{match.match_score}</TableCell>            
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     <button onClick={handleSkillMatches}>Skill Matches</button>
     {errMsg && (
          <div className="error">
            Error: {errMsg}
          </div>
        )}
    </div>
  );
};

export default Matches;
