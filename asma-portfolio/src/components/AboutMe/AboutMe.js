import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="about-me-section">
    <div className="about-me-image-wrapper">
        <img src="/image/asma-web .jpg" alt="Background Image" className="about-me-image" />
        <div className="image-overlay"></div>
    </div>

    <div id="tech-stack">
        <img src="/image/js-animation.gif" alt="JavaScript" id="js-gif" />
        <img src="/image/cat.gif" alt="Java" id="java-gif" />
        <img src="/image/node.Js-development.gif" alt="Node" id="node-gif" />
    </div>

    <div id="about-me-overlay">
        <h2>About Me</h2>
        <div id="fun-text-wrapper">
            <div id="fun-text">Hey, let's debug life together! ✌️From the frontend glitz to the backend logic, I weave code into digital art.</div>
            <span id="fun-emoji">😜</span>
        </div>
    </div>
</section>

  );
}

export default AboutMe;
