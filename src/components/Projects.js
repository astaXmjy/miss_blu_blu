// components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Skill Sarthi - AI-Powered Skill Learning Dashboard',
      period: 'Jun 2024 - Nov 2024',
      description: [
        'Pioneered an AI-driven personalized education platform, integrating a career guidance system that offers tailored advice; achieved a user satisfaction rating of 4.8 out of 5 based on user feedback surveys and provides real-time career guidance.',
        'Architected a responsive user interface with React.js, Next.js, and TypeScript that served 5,000+ daily active users, achieving a 99.9% uptime and reducing page load times by 40% Node.js & Express.js for backend services.',
        'Implemented real-time collaboration and skill gap analysis using data visualization tools like Chart.js.'
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Chart.js', 'AI/ML'],
      links: {
        github: '#',
        live: '#'
      },
      background: 'linear-gradient(135deg, #12263a 0%, #1e3a8a 100%)'
    },
    {
      id: 2,
      title: 'Indian Sign Language Detection & Translation Model',
      period: 'Jan 2024 - Apr 2024',
      description: [
        'Designed a real-time AI model translating Indian Sign Language into words with 95% accuracy.',
        'Trained on a dataset of 1000+ gestures, processing signs in under 200ms using TensorFlow, OpenCV, and NumPy.'
      ],
      technologies: ['TensorFlow', 'OpenCV', 'NumPy', 'Python', 'Machine Learning', 'Computer Vision'],
      links: {
        github: '#',
        live: '#'
      },
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
    },
    {
      id: 3,
      title: 'Open-Source University Tool',
      period: '2023',
      description: [
        'Architected a modular and scalable open-source application using modern software design principles.',
        'The tool is now used by over 300 students across local university clubs.'
      ],
      technologies: ['JavaScript', 'Python', 'Django', 'React', 'RESTful APIs'],
      links: {
        github: '#',
        live: '#'
      },
      background: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 100%)'
    }
  ];

  const toggleProject = (id) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              style={{ background: project.background }}
              onClick={() => toggleProject(project.id)}
            >
              <div className="project-content">
                <div className="project-header">
                  <span className="project-period">{project.period}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-body">
                  <ul className="project-description">
                    {project.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-links">
                    <a href={project.links.github} className="btn btn-sm" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href={project.links.live} className="btn btn-sm btn-outline" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-toggle">
                <i className={`fas fa-chevron-${activeProject === project.id ? 'up' : 'down'}`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;