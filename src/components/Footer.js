import logo from '../components/images/Logo_laraid.jpeg';

const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '75px', // Increased footer height
    backgroundColor: '#f8fafc',
    color: 'white',
    textAlign: 'center',
    padding: '2px', // Smaller padding
    zIndex: '2',
    //fontSize: '14px', // Smaller font size
    lineHeight: '1.2', // Reduce line height
    //marginLeft: '-85px',
    //marginLeft: '-550px',
    left: '250px', // Set the left margin to 250px
  };

const Footer = () => {
    return (
           <div style={footerStyle}>                
                <footer className="estext">                
                    <center><span class="innovate"><span><img class="clogo" src={logo} alt="Logo" /></span><span >LARAID SOFTWARE SOLUTIONS <span class="caption">Innovation Explored...</span></span></span><sup class="incorporation">@U72900TG2022OPC167370</sup>
                    <hr className="hr-footer"/></center>                        
                    <span className='companyText'> *****copyright (Concept, Design, Architect and Solution) by <span class="incorporation">www.laraidsolutions.com</span> 
                    <sup class="incorporation"> @Raja Pinja</sup> 
                    <sub> 
                        <span class="startupIndia"> -: Startup India CERTIFICATE NO:<span class="certificate"> DIPP114845 </span>:-</span>
                    </sub>
                    <br/> 
                    <span className='companyText'> @Prithvihomes, Flat no 203, A-Block, Spring Field Colony, Jeedimetla(V), Quthbullapur (M), Hyderabad (Secunderabad) - 500 055. Telangana, INDIA. Phone +91 9347160365(M)*****</span></span>
                </footer>  
                <br></br>
           </div>  
    )
}
export default Footer;
