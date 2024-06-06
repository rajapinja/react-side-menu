import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios or use fetch
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BASE_URL = 'http://localhost:3001'

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [errMsg, setErrMsg] = useState();

 useEffect(() => {
    // Make an HTTP GET request to fetch profiles
    async function fetchData() {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };

        const response = await axios.get(`${BASE_URL}/api/joblist`, { headers });
          // Handle the response data here
          const { jobs } = response.data;
          setJobs(jobs);

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
        } else {
          setErrMsg('An unexpected error occurred. Please try again later.');
        }
        
        // if (!error?.response) {
        //   // Check if error.response is defined
        //   console.error('Error during Job creation:', error.response?.error);
        //   //setErrMsg(error.response?.data || { error: 'Unknown error occurred 1' })
        //   if (error.response.status === 401) {
        //     setErrMsg('JWT token has expired. Please log in again.');
        //   } else {
        //     setErrMsg('An error occurred. Please try again later.');
        //   }
        // }else{
        //    // Handle cases where error.response is undefined
        //    setErrMsg('An unexpected error occurred. Please try again later.');
        // }
      }
    }

    // Call the fetchData function
    fetchData();
  }, [token]);

  const handleJobs = async () => {  
    try {
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          };
  
          const response = await axios.get(`${BASE_URL}/api/joblist`, { headers });
          // Handle the response data here
          const { jobs } = response.data;
          setJobs(jobs);

          if (response.status === 401 && response.statusText === 'Unauthorized') {
            setErrMsg('JWT token has expired. Please log in again.');
          }else{
            setErrMsg(response.statusText); 
          }   
         
     } catch (error) {
          console.error('Error:', error);
    }      
  }

  return (
      <div>
      <h2>Jobs</h2>
      {/* <button onClick={handleJobs}>Get Job Listings</button> */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
              <TableCell>Job Description</TableCell>
              <TableCell>Skills Required</TableCell>             
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.jobTitle}</TableCell>               
                <TableCell>{job.description}</TableCell>   
                <TableCell>{job.skills_required}</TableCell>            
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {errMsg && (
          <div className="error">
            {errMsg}
          </div>
        )}
    </div>
  
  );
}

export default JobList;
