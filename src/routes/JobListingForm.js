import React, { useState } from 'react';

const BASE_RUL = 'http://localhost:3001'

const JobListingForm = () => {

  const [errMsg, setErrMsg] = useState();
  const [token, setToken] = useState(localStorage.getItem('token') || ''); // Retrieve token from localStorage
  const [jobData, setJobData] = useState({
    jobTitle: '',
    description: '',
    skills_required: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
    setErrMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("jobData :", jobData);
    // In a real application, you would make a POST request to your backend
    try {
            const response = await fetch(`${BASE_RUL}/api/joblisting`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({jobData}),
            });

            if (response.ok) {
              const data = await response.json();      
              console.log('Job creation successful');
            } else {
              console.error('Job creation failed');                
              //console.log("response.status :", response.status);   
              //console.log("response.statusText :", response.statusText);   
              // console.log("response.data.error.reason :", response.data.error.reason);   
              if (response.status === 401 && response.statusText === 'Unauthorized') {
                setErrMsg('JWT token has expired. Please log in again.');
              }else{
                setErrMsg(response.statusText); 
              }           
            }
        } catch (error) {
          if (!error?.response) {
            // Check if error.response is defined
            console.error('Error during Job creation:', error.response?.error);
            //setErrMsg(error.response?.data || { error: 'Unknown error occurred 1' })
            if (error.response?.status === 401 && error.response?.error === 'Token expired') {
              setErrMsg('JWT token has expired. Please log in again.');
            } else {
              setErrMsg('An error occurred. Please try again later.');
            }
          }else{
             // Handle cases where error.response is undefined
             setErrMsg('An unexpected error occurred. Please try again later.');
          }
        }

        console.log('Job Listing Data to be sent:', jobData);

    // Reset the form fields
    setJobData({
      jobTitle: '',
      description: '',
      skills_required: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputCenter'>
        <h2>Create Job Listing</h2>
      </div>    
        <div className='inputs'>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleInputChange}
            placeholder="Job Title"
            required
          />
       
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={jobData.description}
            onChange={handleInputChange}
            placeholder="Job Description"
            required
          />
       
          <label htmlFor="skills_required">Skills Required:</label>
          <input
            type="text"
            id="skills_required"
            name="skills_required"
            value={jobData.skills_required}
            onChange={handleInputChange}
            placeholder="Skills Required"
            required
          />
        </div>
        <button type="submit">Create Job Listing</button>
        {errMsg && (
          <div className="error">
            Error: {errMsg}
          </div>
        )}
      </form>
    
  );
};

export default JobListingForm;
