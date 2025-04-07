// components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      name: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'C/C++', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'R', level: 70 },
        { name: 'PHP', level: 65 }
      ]
    },
    {
      id: 2,
      name: 'Frameworks',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'OpenCV', level: 75 },
        { name: 'Streamlit', level: 80 }
      ]
    },
    {
      id: 3,
      name: 'Technologies',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Linux', level: 80 },
        { name: 'UNIX', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'Data Science', level: 85 },
        { name: 'Machine Learning', level: 80 }
      ]
    },
    {
      id: 4,
      name: 'Tools',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Tableau', level: 80 },
        { name: 'Selenium', level: 70 },
        { name: 'Chart.js', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-container">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Achievements</h3>
          <div className="achievement-cards">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="achievement-content">
                <h4>LeetCode Problem Solving</h4>
                <p>Solved 200+ DSA problems on Leetcode, specializing in Arrays, Graphs, DP, and Trees</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="achievement-content">
                <h4>Event Organization</h4>
                <p>Conceptualized and curated content for TEDx IPSA Indore, recruiting 10 speakers and resulting in 500+ attendees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;