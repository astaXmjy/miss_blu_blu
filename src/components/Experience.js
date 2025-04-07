// components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'ASAP Research Solutions',
      position: 'Software Development Engineering Intern',
      date: 'Dec 2023 - Jun 2024',
      description: [
        'Engineered a data accuracy-enhancing system, reducing data redundancy by 25% using Python, Pandas, NumPy, and ML models.',
        'Optimized web applications using Python, Java, and JavaScript, improving code efficiency by 15% and reducing API response time by 20%.',
        'Constructed and maintained scalable back-end solutions using Flask / Django, integrated SQL / NoSQL databases, and deployed REST APIs, leading to a 30% increase in user engagement.'
      ]
    },
    {
      id: 2,
      company: 'Chirayu Jain Architects',
      position: 'Research & Development Intern',
      date: 'Nov 2023 - Jan 2024',
      description: [
        'Planned and developed 50+ high-impact architectural models, improving project efficiency by 20%.',
        'Leveraged Python, Pandas, and Tableau to clean, analyze, and visualize complex datasets, generating actionable dashboards and reports that improved data-driven decision-making.'
      ]
    },
    {
      id: 3,
      company: 'National Cadet Corps (NCC)',
      position: 'Senior Under Officer',
      date: 'Aug 2022',
      description: [
        'Led and mentored 600+ cadets during All India Thal Sainik Camp, overseeing training, logistics, and operations.',
        'Improved cadet performance and morale through strategic leadership and effective team-building exercises.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.position}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;