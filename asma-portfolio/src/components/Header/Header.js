// Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Asma Saiyed</h1>
        <p className="tagline">Full Stack Developer</p>
        <p className="intro-text">
          I am proactive, dedicated, and a passionate developer.
          <br />
          Do you want to create something amazing together?
          <br />
          Let me introduce myself...
        </p>
      </div>
      <div className="image-container">
        <img src="/image/asma.jpg" alt="Asma Saiyed" className="profile-pic" />
      </div>
    </header>
  );
}

export default Header;
