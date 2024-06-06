// DynamicUtilityLinks.js
import React from 'react';
import PropTypes from 'prop-types';
import './UtilityLinks.css';
import freelancer_img from '../components/images/freelancer_img.jpg';
import ts_teachers_img from '../components/images/Telangana-Teachers.jpg';
import public_service_img from '../components/images/ts_ps_img.jpg';
import ai_tools_img from '../components/images/ai_tools_img.jpg';
import ts_traffic_echallan_img from '../components/images/ts_traffic_echallan_img.webp';
import laraid_img from '../components/images/Logo_laraid.jpeg'
import loans from '../components/images/loans.jpg'

// const linkContainerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignContent: 'center',
//   alignItems: 'flex-start', // Align items to the left
// };

const linkStyle = {
  color: 'blue',
  textDecoration: 'underline',
  margin: '0 10px', // Add spacing between links
};
const linkSescriptionStyle = {
  color: 'black',
  margin: '5px 0', // Add spacing between links
};

// const containerStyle = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between', // Adjust as needed
// };

const cardStyle = {
//   width: 'calc(50% - 20px)', // Adjust the width as needed
  flex: '1 0 300px', // Flexible width with a minimum of 300px
  margin: '6px', // Add margin between cards
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
//   backgroundSize: 'contain', // Set to 'contain' for exact fit
  backgroundSize: '100% 100%', // Set to '100% 100%' to cover the entire card
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('../components/images/lights600x400.jpg')`, 
//   backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', // Set to 'no-repeat'
//   backgroundPosition: 'center',
  whiteSpace: 'nowrap', // Prevent text from wrapping
  filter: 'blur(.5px)', // Adjust the blur value as needed
  transform: 'perspective(600px) rotateY(10deg)', // Adjust the values for desired 3D effect
};

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
};

const DynamicUtilityLinks = ({ cards }) => {
    const cardImages = [freelancer_img, ts_teachers_img, public_service_img, ai_tools_img, ts_traffic_echallan_img, laraid_img, loans];

  return (
    <div className="card-layout">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card card${index + 1}`}
          style={{ ...cardStyle, backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${cardImages[index]})` }}
        >
          <h4>{card.title}</h4>
          <hr className="hr-line" />
          <div style={cardContentStyle}>
            {card.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={linkSescriptionStyle}>{link.description}: </span><span style={linkStyle}>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

DynamicUtilityLinks.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default DynamicUtilityLinks;
