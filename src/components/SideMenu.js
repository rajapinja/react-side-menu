// src/components/SideMenu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';


function SideMenu() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  //const pdfUrl32213 = 'C:\\Users\\raja_\\OneDrive\\Desktop\\_Docs\\_ICICI_BANK_LOAN\\ICICIBANK_PERSONAL_LOAN_EMI32213_DBA1500000.pdf';

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`side-menu ${isSmallScreen ? 'small-screen' : ''}`}>
      <button className="toggle-button" onClick={toggleHamburger}>
        ☰ {/* Hamburger menu icon */}
      </button>
      <div className={`menu-content ${isSmallScreen ? 'hamburger-menu' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/profileForm">ProfileForm</Link>
          </li>
          <li>
            <Link to="/profileList">ProfileList</Link>
          </li>
          <li>
            <Link to="/jobListingform">JobListingForm</Link>
          </li>
          <li>
            <Link to="/jobListing">JobListing</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/speechToText">SpeechToText</Link>
          </li>
          <li>
            <Link to="/generateSpeech">GenerateSpeech</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/razorpay">RazorPay</Link>
          </li>
          <li>
            <Link to="/freelancer">Freelancer</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/videoCall">VideoCall</Link>
          </li>
          <li>
            <Link to="/chatBot">ChatBot</Link>
          </li>
          <li>
            <Link to="/chatApp">ChatApp</Link>
          </li>
          <li>
            <Link to="/pdfViewer">PdfViewer</Link>
          </li>
           <li>
            <Link to="/pdfGenerator">PdfGenerator</Link>
          </li>         
          {/* <li>
            <Link to="/pForm">PForm</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
 
}

export default SideMenu;
