import React from "react";
import "./Services.css";
import Card from "./Card/Card";
import HeartEmoji from "./Card/heartemoji.png";
import Glasses from "./Card/glasses.png";
import Humble from "./Card/humble.png";

const Services = () => {
  return (
    <div className="services-section">
      <h1>Developer Services</h1>
      <div className="services-grid">
        <div className="service-item">
          <i className="service-icon devicon-react-original colored"></i>
          <h2>Frontend Development</h2>
          <p>Building responsive and interactive websites using React, Vue, and Angular.</p>
        </div>
        <div className="service-item">
          <i className="service-icon devicon-nodejs-plain colored"></i>
          <h2>Backend Development</h2>
          <p>Creating robust backends with Node.js, Express, and databases like MongoDB and SQL.</p>
        </div>
        <div className="service-item">
          <i className="service-icon devicon-devicon-plain"></i>
          <h2>Full Stack Development</h2>
          <p>Delivering end-to-end solutions with a combination of frontend and backend technologies.</p>
        </div>
        <div className="service-item">
          <i className="service-icon devicon-git-plain colored"></i>
          <h2>Version Control</h2>
          <p>Expertise in Git and collaboration tools like GitHub and GitLab.</p>
        </div>
      </div>
    </div>
  );
};


export default Services;
