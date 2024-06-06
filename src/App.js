// src/App.js
import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PdfGenerator from './components/PdfGenerator';
import PdfViewer from './components/PdfViewer1';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import Registration from './routes/Registration'; // Correct the import path
import Login from './routes/Login'; // Correct the import path
import Header from './components/Header';
import ProfileForm from './routes/ProfileForm';
import ProfileList from './routes/ProfileList';
import JobListingForm from './routes/JobListingForm';
import JobListing from './routes/JobListing';
import Matches from './routes/Matches';
import Layout from './components/Layout';
import './App.css'; // Import your custom CSS file
import RequiredAuth from './routes/RequiredAuth';
import Error from './routes/Error';
import VideoCall from './routes/VideoCall';
import ChatApp from './routes/ChatApp';
import VideoCall_1 from './routes/VideoCall_1';
import SpeechToText from './routes/SpeechToText';
import GenerateSpeech from './routes/GenerateSpeech';
import PForm from './routes/PForm';
import Freelancer from './routes/Freelancer';
import Links from './routes/Links';
import RazorPay from './routes/RazorPay';
import ChatBot from './routes/ChatBot';
// import FileUpload from './routes/FileUpload';
// import URL2PPT from './componets/URL2PPT'
// import ChatBot from './componets/URL2PPT'


function App() {

  //pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

  return (
    <>
      <Header />
      <Router>
        <div className="app">
          <div className="app-container">

            {/* <div className="wrapper"> */}
            <SideMenu />
            <div className="content-wrapper">
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route element={<RequiredAuth />}>                */}
                    <Route path="/profileform" element={<ProfileForm />} />
                    <Route path="/profilelist" element={<ProfileList />} />
                    <Route path="/jobListingform" element={<JobListingForm />} />
                    <Route path="/jobListing" element={<JobListing />} />
                    <Route path="/matches" element={<Matches />} />
                    <Route path="/speechToText" element={<SpeechToText />} />
                    <Route path="/generateSpeech" element={<GenerateSpeech />} />
                    {/* <Route path="/pForm" element={<PForm />} /> */}
                    <Route path="/razorpay" element={<RazorPay />} />
                    <Route path="/freelancer" element={<Freelancer />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/videoCall" element={<VideoCall />} />
                    <Route path="/chatApp" element={<ChatApp />} />
                    {/* <Route path="/videoCall_1" element={<VideoCall_1 />} /> */}
                    {/* </Route>  */}
                    <Route path="/pdfViewer" element={<PdfViewer />} />
                    <Route path="/pdfGenerator" element={<PdfGenerator />} />
                    {/* <Route path="/URL2PPT" element={<URL2PPT />} /> */}
                    <Route path="/chatBot" element={<ChatBot />} />
                    <Route path='*' element={<Error />} />
                  </Route>
                </Routes>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

