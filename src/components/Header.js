// src/components/Header.js
import React from 'react';
import './Header.css';
import './FlashingText.css'
import logo from '../components/images/Logo_laraid.jpeg';

function Header() {
  return (
    <header className="header">
      <span className='header-title'>Freelancer, Remote Worker, and Employers Collaboration Platform <img className="clogo_1" src={logo} alt="Logo"/></span>
      <span className='header-subtitle'>Platform aims to connect freelancers, remote workers, and employers in a seamless and efficient manner</span>
    </header>
  );
}

export default Header;
