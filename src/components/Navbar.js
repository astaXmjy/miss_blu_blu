// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="hero" smooth={true} duration={500}>
            <h1>DJ<span>.</span></h1>
          </Link>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="hero" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About
          </Link>
          <Link to="experience" smooth={true} duration={500} onClick={closeMenu}>
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
            Skills
          </Link>
          <Link to="certifications" smooth={true} duration={500} onClick={closeMenu}>
            Certifications
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;