// src/components/toggleMenu.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const sideMenu = document.querySelector('.side-menu');
  
    toggleButton.addEventListener('click', () => {
      sideMenu.classList.toggle('open');
    });
  });
