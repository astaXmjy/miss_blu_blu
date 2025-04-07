// components/Footer.js
import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-content">
          <div className="footer-info">
            <h2 className="footer-logo">DJ<span>.</span></h2>
            <p>
              Full Stack Developer & Data Science Enthusiast 
              with a passion for creating innovative web solutions 
              and leveraging data to solve complex problems.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/deeksha" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/deeksha" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="hero" smooth={true} duration={500}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500}>Experience</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <i className="fas fa-phone"></i>
                <span>+91 8103430663</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>deekshajain.dev@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Indore, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Deeksha Jain. All Rights Reserved.</p>
          <a href="#" className="back-to-top">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;