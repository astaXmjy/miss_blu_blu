// components/About.js
import React from 'react';
import './About.css';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <div className="placeholder-image">
                <span>DJ</span>
              </div>
              <div className="image-frame"></div>
            </div>
          </div>
          <div className="about-text">
            <h3>Full Stack Developer & Data Science Enthusiast</h3>
            <p>
              I'm Deeksha Jain, a passionate computer science graduate specializing in full stack development
              and data science. With experience in building scalable web applications and implementing
              machine learning solutions, I strive to create innovative technology that solves real-world problems.
            </p>
            
            <div className="about-details">
              <div className="about-details-item">
                <h4>Education</h4>
                <div className="education-card">
                  <h5>Bachelor of Technology in Computer Science</h5>
                  <p className="institution">IPS Academy, Indore</p>
                  <p className="minor">Minor: Data Science</p>
                  <p className="courses">
                    <strong>Relevant Coursework:</strong> Data Structures & Algorithms,
                    Machine Learning, Artificial Intelligence, Operating Systems, Computer Networks
                  </p>
                </div>
              </div>
              
              <div className="about-details-item">
                <h4>Personal Info</h4>
                <ul className="info-list">
                  <li><span>Phone:</span> 8103430663</li>
                  <li><span>Email:</span> deekshajain.dev@gmail.com</li>
                  <li>
                    <span>LinkedIn:</span>
                    <a href="https://linkedin.com/in/deeksha" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/deeksha
                    </a>
                  </li>
                  <li>
                    <span>GitHub:</span>
                    <a href="https://github.com/deeksha" target="_blank" rel="noopener noreferrer">
                      github.com/deeksha
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="/resume.pdf" className="btn" download>Download CV</a>
              <Link to="contact" smooth={true} duration={500} className="btn btn-outline">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;