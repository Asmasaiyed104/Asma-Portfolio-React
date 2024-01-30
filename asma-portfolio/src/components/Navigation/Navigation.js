import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Make sure this path is correct

function Navigation() {
  return (
    <nav>
      <Link to="/">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Link to="/certifications">Certifications</Link>
    </nav>
  );
}

export default Navigation;
