import React, { useState } from 'react';
import './ProfileForm.css';

function PForm() {
  const [photoFile, setPhotoFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);

  const handleFileInputChange = (e, fileType) => {
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
  };

  const handleSave = () => {
    // Here you can save the selected files (photoFile, resumeFile, signatureFile)
    // to your database or perform any necessary actions.
    console.log('Selected Photo:', photoFile);
    console.log('Selected Resume:', resumeFile);
    console.log('Selected Signature:', signatureFile);
  };

  return (
    <div>
      <div className="file-upload-box" onClick={() => document.getElementById('photoInput').click()}>

        {photoFile ? (
          <p>Selected Photo: {photoFile.name}</p>
        ) : (
          <p>Click here to select a Photo</p>
        )}

        <input
          type="file"
          id="photoInput"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={(e) => handleFileInputChange(e, 'photo')}
        />
      </div>

      <div className="file-upload-box" onClick={() => document.getElementById('resumeInput').click()}>

        {resumeFile ? (
          <p>Selected Resume: {resumeFile.name}</p>
        ) : (
          <p>Click here to select a Resume</p>
        )}

        <input
          type="file"
          id="resumeInput"
          style={{ display: 'none' }}
          accept=".pdf,.doc,.docx"
          onChange={(e) => handleFileInputChange(e, 'resume')}
        />
      </div>

      <div className="file-upload-box" onClick={() => document.getElementById('signatureInput').click()}>

        {signatureFile ? (
          <p>Selected Signature: {signatureFile.name}</p>
        ) : (
          <p>Click here to select a Signature</p>
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
  );
}

export default PForm;
