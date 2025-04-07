// components/Certifications.js
import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: 'fab fa-aws',
      color: '#FF9900'
    },
    {
      id: 2,
      title: 'Getting Started with Jetson Nano AI',
      issuer: 'NVIDIA',
      date: '2024',
      icon: 'fas fa-microchip',
      color: '#76B900'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-container">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-icon" style={{ background: cert.color }}>
                <i className={cert.icon}></i>
              </div>
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <span className="certification-date">{cert.date}</span>
              </div>
              <div className="certification-badge">
                <i className="fas fa-certificate"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;