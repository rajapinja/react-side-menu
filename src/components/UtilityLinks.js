import React, {useState} from 'react';
import Layout from './Layout';
import './UtilityLinks.css';
import freelancer_img from '../components/images/freelancer_img.jpg';

const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'flex-start', // Align items to the left
};

const linkStyle = {
  color: 'blue',
  textDecoration: 'underline',
  margin: '0 10px', // Add spacing between links
};
const linkSescriptionStyle = {
  color: 'black',  
  margin: '5px 0', // Add spacing between links
  
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between', // Adjust as needed
};

const cardStyle = {
    width: 'calc(50% - 20px)', // Adjust the width as needed
    margin: '10px', // Add margin between cards
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };
  
  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
  };

const UtilityLinks = () => {

   
    const [isFooterVisible, setFooterVisible] = useState(true);
  
    // Function to receive the selected PDF filename
      
    const handleCardMouseEnter = () => {
      setFooterVisible(false);
    };
  
    const handleCardMouseLeave = () => {
      setFooterVisible(true);
    };

  return (
    
    <div className="card-layout">     
       <div className="card card1" >  
        <h4> Freelancer Platforms </h4>
        {/* <img src={freelancer_img} alt="Card Background" /> */}
            <hr className='hr-line'/>
            <div style={cardContentStyle}>
                <a
                href="https://www.upwork.com/nx/find-work/best-matches"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Upwork : </span><span  style={linkStyle}>Upwork </span>              
                </a>       
                <a
                href="https://www.freelancer.in/dashboard"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Freelancer : </span><span  style={linkStyle}>Freelancer</span>              
                </a>
                <a
                href="https://www.guru.com/pro/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Guru : </span><span  style={linkStyle}>Guru</span>              
                </a>

                <a
                href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
                target="
                _blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>LinkedIn : </span><span  style={linkStyle}>LinkedIn</span>              
                </a>
                <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Fiverr : </span><span  style={linkStyle}>Fiverr</span>              
                </a>
                <a
                href="https://www.toptal.com/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Toptal : </span><span  style={linkStyle}>Toptal</span>              
                </a>
                <a
                href="https://www.flexjobs.com/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Flexjobs : </span><span  style={linkStyle}>Flexjobs</span>              
                </a>
                <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Behance : </span><span  style={linkStyle}>Behance</span>              
                </a>
                <a
                href="https://www.wwr.com/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>WWR : </span><span  style={linkStyle}>WWR</span>              
                </a>
                <a
                href="https://www.designhill.com/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                    <span  style={linkSescriptionStyle}>Designhill : </span><span  style={linkStyle}>Designhill</span>              
                </a>    
                         
            </div>            
        </div>
        <div className="card card2" >  
            <h4> Telangana Teacher(s) links </h4>     
            <hr className='hr-line'/>
            <div style={cardContentStyle}>
                <a
                href="https://ifmis.telangana.gov.in/get_payslip_publicview"
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>IFMIS : </span><span  style={linkStyle}>IFMIS</span>              
                </a>      
                <a
                href="https://epanchayat.telangana.gov.in/zpgpf/index.jsp"
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>ZP GPF : </span><span  style={linkStyle}>ZP-GPF</span>              
                </a>
            </div>
        </div>
        <div className="card card3" >  
            <h4> Public Service Portal(s) </h4>     
            <hr className='hr-line'/>
            <div style={cardContentStyle} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
                <a
                href="https://voters.eci.gov.in/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>Voter Portal : </span><span  style={linkStyle}>Electoral Portal</span>              
                </a>      
                <a
                href="https://www.onlineservices.nsdl.com/paam/requestAndDownloadEPAN.html"
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>PAN Download: </span><span  style={linkStyle}>PAN</span>              
                </a>
                <a
                href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar "
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>eAadhar Download: </span><span  style={linkStyle}>Aadhar</span>              
                </a>
                <a
                href="https://www.transport.telangana.gov.in/html/driving-licence.html "
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>RTA Portal: </span><span  style={linkStyle}>Driving License</span>              
                </a>
                <a
                href="https://ts.meeseva.telangana.gov.in/meeseva/home.htm "
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>MeeSeva Portal: </span><span  style={linkStyle}>MeeSeva Portal</span>              
                </a>
            </div>
            {/* <Layout isFooterVisible={isFooterVisible}/>  */}
        </div>
        <div className="card card4" >  
            <h4> AI Tools </h4>     
            <hr className='hr-line'/>
            <div style={cardContentStyle} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
                <a
                href="https://chat.openai.com/"
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>OpenAI ChatGPT 3 : </span><span  style={linkStyle}>ChatGPT</span>              
                </a>      
                <a
                href="https://bard.google.com/chat"
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>Google Bard: </span><span  style={linkStyle}>BARD</span>              
                </a>
                <a
                href="https://www.bing.com/search?q=What+can+the+new+Bing+chat+do+for+you%3F&showconv=1&form=M403K8"
                target="_blank"
                rel="noopener noreferrer"              
                >
                <span  style={linkSescriptionStyle}>Microsoft Bing: </span><span  style={linkStyle}>Bing</span>              
                </a>               
            </div>
            {/* <Layout isFooterVisible={isFooterVisible}/>  */}
        </div>
    </div>
  );
};

export default UtilityLinks;