// Resume.js
import React from 'react';
import './Resume.css'; // assuming you have a CSS file named Resume.css for styling

function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className="resume-download">
                <a href="https://drive.google.com/file/d/1zHcRXUYRR9Zflyaub0487pHIKe0AyllO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Download My Resume
                </a>
            </div>
        </section>
    );
}

export default Resume;
