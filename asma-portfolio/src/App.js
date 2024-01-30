// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import all your components, ensure the paths are correct
import Header from './components/Header/Header';

import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services';
import Projects from './components/Projects'; // Ensure this file exists
import Resume from './components/Resume'; // Ensure this file exists
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import Certifications from './components/Certifications';

import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />

        <div className="container">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} /> {/* Changed from /portfolio */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/certifications' element={<Certifications/>}/>
            
            {/* Add other routes if necessary */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
