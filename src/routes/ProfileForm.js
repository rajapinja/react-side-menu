import React, { useState, useEffect } from 'react';
import './ProfileForm.css';

const BASE_URL = 'http://localhost:3001';

function ProfileForm() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [profileData, setProfileData] = useState({
    profileName: '',
    skills: '',
    experience: 0,
    portfolioLink: '',
    jobTitle: '',
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);
  const [isUploadPopupOpen, setUploadPopupOpen] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [filesSelected, setFilesSelected] = useState(false); // Flag to track file selection

  const handleFileInputChange = (e, fileType) => {
    e.preventDefault(); // Prevent the default behavior of opening the file input dialog
    const file = e.target.files[0];

    switch (fileType) {
      case 'photo':
        setPhotoFile(file);
        break;
      case 'resume':
        setResumeFile(file);
        break;
      case 'signature':
        setSignatureFile(file);
        break;
      default:
        break;
    }

    // Check if all files are selected
    if (photoFile && resumeFile && signatureFile) {
      setFilesSelected(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
   
    // setPhotoFile(photoFile);
    // console.log('Selected Photo:', photoFile);
    // console.log('Selected Resume:', resumeFile);
    // console.log('Selected Signature:', signatureFile);
    setUploadPopupOpen(false); // Close the popup after saving.
  };

  const openUploadPopup = () => {
    setUploadPopupOpen(true);
  };

  const closeUploadPopup = () => {
    setUploadPopupOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Inside handleSubmit');

      const formData = new FormData();
      formData.append('profileData', JSON.stringify(profileData));
      if (photoFile) {
        formData.append('photoFile', photoFile.name);
      }
      if (resumeFile) {
        formData.append('resumeFile', resumeFile.name);
      }
      if (signatureFile) {
        formData.append('signatureFile', signatureFile.name);
      }

      console.log('formData :', formData);
      // console.log('photoFile', photoFile)
      // console.log('resumeFile', resumeFile)
      // console.log('signatureFile', signatureFile)
      
      const response = await fetch(`${BASE_URL}/api/profiles`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Profile creation successful');
        closeUploadPopup(); // Close the popup after a successful profile creation.
      } else {
        console.error('Profile creation failed');
        if (response.status === 401 && response.statusText === 'Unauthorized') {
          setErrMsg('JWT token has expired. Please log in again.');
        } else {
          setErrMsg(response.statusText);
        }
      }
    } catch (error) {
      console.error('Error during Profile creation:', error);
    }
  };

  return (
    <>
      <h2>Profile Form</h2>
      <div className="profile-container">
        <div className="element">
          <div className="avatar-container">
            <div className="avatar" onClick={openUploadPopup} onFocus={openUploadPopup} >
            {photoFile ? (
                <img src={photoFile.name} alt="Selected Avatar" />
              ) : (
                <img src="/avatar_dummy.jpg" alt="Default Avatar" />
              )}
              {/* <img src="/avatar_dummy.jpg" alt="Default Avatar" /> */}
                {isUploadPopupOpen && (
                  <div className="upload-popup">
                    <div className="popup-header">
                      <div class="popup-title">Upload Documents</div>
                    </div>
                    <hr></hr>
                    <div class="popup-message">(Photo, Resume, and Signature).</div>
                    
                    <div className="file-upload-box popup-item" onClick={() => document.getElementById('photoInput').click()}>
                      {photoFile ? (
                        <p className="selected-text">Selected Photo: {photoFile.name}</p>
                      ) : (
                        <p className="placeholder-text">Click here to select a Photo</p>
                      )}
                      <input
                        type="file"
                        id="photoInput"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={(e) => handleFileInputChange(e, 'photo')}
                      />
                    </div>

                    <div className="file-upload-box popup-item" onClick={() => document.getElementById('resumeInput').click()}>
                      {resumeFile ? (
                        <p className="selected-text">Selected Resume: {resumeFile.name}</p>
                      ) : (
                        <p className="placeholder-text">Click here to select a Resume</p>
                      )}
                      <input
                        type="file"
                        id="resumeInput"
                        style={{ display: 'none' }}
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileInputChange(e, 'resume')}
                      />
                    </div>

                    <div className="file-upload-box popup-item" onClick={() => document.getElementById('signatureInput').click()}>
                      {signatureFile ? (
                        <p className="selected-text">Selected Signature: {signatureFile.name}</p>
                      ) : (
                        <p className="placeholder-text">Click here to select a Signature</p>
                      )}
                      <input
                        type="file"
                        id="signatureInput"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={(e) => handleFileInputChange(e, 'signature')}
                      />
                    </div>

                    {photoFile && resumeFile && signatureFile && (
                      <button onClick={handleSave}>Save</button>
                    )}
                  </div>
                )}
              </div>
            </div>
            </div>
            <div className="inputs element">
              <label>Profile Name :</label>
              <input
                type="text"
                name="profileName"
                value={profileData.profileName}
                onChange={handleChange}
                placeholder="Profile Name"
              />
              <label>Job Type :</label>
              <select
                name="jobTitle"
                value={profileData.jobTitle}
                onChange={handleChange}
              >
                <option value="">Select Employment type</option>
                <option value="freelancer">Freelancer</option>
                <option value="remoteWorker">Remote Worker</option>
                <option value="employee">Employee</option>
              </select>
              <label>Skills :</label>
              <input
                type="text"
                name="skills"
                value={profileData.skills}
                onChange={handleChange}
                placeholder="Skills"
              />
              <label>Experience :</label>
              <textarea
                name="experience"
                value={profileData.experience}
                onChange={handleChange}
                placeholder="Experience"
              />
              <label>Profile Link :</label>
              <input
                type="text"
                name="portfolioLink"
                value={profileData.portfolioLink}
                onChange={handleChange}
                placeholder="Portfolio Link"
              />
          </div>
        </div>

          <div>
            <button className="btnCenter" onClick={handleSubmit}>
              Create Profile
            </button>
            {errMsg && <div className="error">Error: {errMsg}</div>}
          </div>
    </>
  );
}

export default ProfileForm;
