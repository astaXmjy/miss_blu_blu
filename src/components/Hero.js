// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const roles = ["Full Stack Developer", "Data Science Enthusiast", "ML Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);

    return () => clearTimeout(type);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h3 className="hero-subtitle">Hello, I'm</h3>
          <h1 className="hero-title">Deeksha Jain</h1>
          <h2 className="hero-role">
            I'm a <span className="typing-text" ref={typingRef}></span>
          </h2>
          <p className="hero-description">
            Building innovative web solutions and leveraging data science to solve complex problems.
          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" className="btn" download>Download Resume</a>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <Link to="about" smooth={true} duration={500}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-text">Scroll Down</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;