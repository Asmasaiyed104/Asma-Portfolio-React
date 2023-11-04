import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-header">
                <h1>My Projects</h1>
                <p>Here are some of the projects I've been working on:</p>
            </div>

            <div className="projects-grid">
                {/* First Project */}
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="image/spring.png" alt="SpringBoot cine reviews" />
                    </div>
                    <div className="project-details">
                        <h3>SpringBoot cine reviews</h3>
                        <p><strong>Technologies Used:</strong> Spring Boot, Spring MVC, Thymeleaf, and more.</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104/Java-Enterprise/tree/master" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://youtu.be/N_aF50xvEr0" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
                {/*second project*/ }
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="image/react.png" alt="React portfolio" />
                    </div>
                    <div className="project-details">
                        <h3>Asma React Portfolio</h3>
                        <p><strong>Technologies Used:</strong> Node.js, JavaScript (ES6+), HTML5, CSS3, and essential tools like Webpack, Babel, and Git for development and deployment.</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104/Asma-Portfolio-React/tree/master" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://youtu.be/sEZMnfAHMnA" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                {/* Third Project */}
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="image/wpf.jpg" alt="WPF Product Management System" />
                    </div>
                    <div className="project-details">
                        <h3>WPF Product Management System</h3>
                        <p><strong>Technologies Used:</strong> WPF, XAML, C#, and more.</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104/Final_AsmabanuSaiyed" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://youtu.be/ZMoNWQbchBs?si=bzZ2qt3BJDOlqb14" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                {/* Fourth Project */}
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="image/wpf.png" alt="ADO.NET Sample Application" />
                    </div>
                    <div className="project-details">
                        <h3>ADO.NET Sample Application</h3>
                        <p><strong>Technologies Used:</strong> ADO.NET, C#, SQL Server, and more.</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104/A2AsmabanuSaiyed" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://youtu.be/Cp1yQih-718" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                {/* Fifth Project: Mobile Web */}
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="image/Ajax.jpg" alt="Mobile Web Application" />
                    </div>
                    <div className="project-details">
                        <h3>Mobile Web Application</h3>
                        <p><strong>Technologies Used:</strong> JavaScript for client-side web scripting, AJAX for fetching JSON data, and HTML/CSS for web page layout and styling.</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104/Mobile-Web/tree/master" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://www.youtube.com/watch?v=F1NjoXTJKpc" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
                {/* sixth Project: JavascriptCineBooking */}
<div className="project">
    <div className="project-thumbnail">
        <img src="./image/javascript.jpg" alt="Javascript Cine Booking" />
    </div>
    <div className="project-details">
        <h3>Javascript Cine Booking</h3>
        <p><strong>Technologies Used:</strong> JavaScript, HTML, CSS, LocalStorage, and more.</p>
        <div className="project-actions">
            <a href="https://github.com/Asmasaiyed104/JavaScriptCineBooking/tree/master/Assignment1_Asma" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <a href="https://vimeo.com/880053608" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
    </div>
    {/*Seventh Project */}
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="image/spring.png" alt="Sixth Project Name" />
                    </div>
                    <div className="project-details">
                        <h3>Spring Boot Rest API</h3>
                        <p><strong>Technologies Used:</strong> Spring Frameworks, POSTgreSQL, RestAPT</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104/Spring-Boot-Rest-API-Voting-System/tree/master" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://youtu.be/8ntDRng0cWE" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                {/* Eight'th Project.. */}
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="/image/HTMLCSSpng.png"alt="Sixth Project Name" />
                    </div>
                    <div className="project-details">
                        <h3>HTML and CSS </h3>
                        <p><strong>Technologies Used:</strong> HTML5, CSS, Media responsive</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104?tab=repositories" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://www.youtube.com/watch?v=1LcEQjZpOtI" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
                {/* Nine'th Project.. */}
                <div className="project">
                    <div className="project-thumbnail">
                        <img src="/image/database.jpg"alt="Sixth Project Name" />
                    </div>
                    <div className="project-details">
                        <h3>Database </h3>
                        <p><strong>Technologies Used:</strong> SQL, Relational Databases, Data Manipulation,Transaction Control, Backup and Recovery, User Access Management</p>
                        <div className="project-actions">
                            <a href="https://github.com/Asmasaiyed104/Database-" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href="https://youtu.be/EA8zIGqWJH4" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
}

export default Projects;


