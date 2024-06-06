// src/components/Home.js
import React, {useState} from 'react';
import ReactPdf from './ReactPdf';
import FetchPdfList from './FetchPdfList';
import FetchLaraidPdfList from './FetchLaraidPdfList';
// import UtilityLinks from './UtilityLinks';
import Layout from './Layout';
// import URL2PPT from './URL2PPT';

const linkStyle = {
  color: 'blue',
  textDecoration: 'underline',
  margin: '0 10px', // Add spacing between links
};
const linkSescriptionStyle = {
  color: 'black',  
  margin: '5px 0', // Add spacing between links  
};

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
};


function Home() {

  const [selectedPdf, setSelectedPdf] = useState('');
  const [isFooterVisible, setFooterVisible] = useState(true);

  // Function to receive the selected PDF filename
  const handlePdfSelected = (pdfFilename) => {
    setSelectedPdf(pdfFilename);
  };

  const handleCardMouseEnter = () => {
    setFooterVisible(false);
  };

  const handleCardMouseLeave = () => {
    setFooterVisible(true);
  };


  return (
    <> <span><h2>Home Page</h2></span>
    <div className="card-layout">      
        <div className="card card3" onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
          <h3> PDF Viewer - Loan Amortization Schedule </h3>
          <hr className='hr-line'/>
          <FetchPdfList onPdfSelected={handlePdfSelected} />
          {selectedPdf && <ReactPdf pdfFilename={selectedPdf} />}
        </div>       
        <div className="card card4" onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
          <h3> LARAID - MSME and SEED FUND PitchDeck </h3>
          <hr className='hr-line'/>
          <FetchLaraidPdfList onPdfSelected={handlePdfSelected} />
          {selectedPdf && <ReactPdf pdfFilename={selectedPdf} />}
        </div>    
        {/* <div className="card card4" onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
          <h3> Download PPT for YouTube videos </h3>
          <hr className='hr-line'/>
          <URL2PPT/>
        </div>    */}
        <Layout isFooterVisible={isFooterVisible}/>      
    </div>
    </>
  );
}

export default Home;
