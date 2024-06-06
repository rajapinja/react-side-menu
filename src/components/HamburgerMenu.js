import React, { useState } from 'react';

function HMenu() {
    
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 768
      );
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      window.addEventListener('resize', () => {
        setIsSmallScreen(window.innerWidth <= 768);
      });
    
      return (
        <div className="App">
          <header>
            <button
              className={`menu-toggle ${isSmallScreen ? 'visible' : ''}`}
              onClick={toggleMenu}
            >
              ☰
            </button>
            <h1>My App</h1>
          </header>
          <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <main>
            <p>Your main content goes here.</p>
          </main>
        </div>
      );
}

export default HMenu;
