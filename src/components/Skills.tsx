import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const technicalSkills = [
    'C Language', 'PHP', 'JAVA', 'HTML & CSS', 'MySQL', 'Dart', 'Javascript'
  ];

  const languages = [
    { name: 'Chinese', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
    { name: 'Bahasa Melayu', level: 'Intermediate' }
  ];

  return (
    <section className="skills-section glass-panel animate-fade-in-up delay-100">
      <div className="skills-container">
        <div className="skill-group">
          <h2 className="section-title">Technical Skills</h2>
          <div className="tags">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="tag technical">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h2 className="section-title">Languages</h2>
          <div className="language-list">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
