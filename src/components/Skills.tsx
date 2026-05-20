import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import './Skills.css';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills = [
    'C Language', 'PHP', 'JAVA', 'HTML & CSS', 'MySQL', 'Dart', 'Javascript'
  ];

  const languages = [
    { name: 'Chinese', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
    { name: 'Bahasa Melayu', level: 'Intermediate' }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade in the whole section
    animate(sectionRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      delay: 200,
      ease: 'outExpo',
    });

    // Section titles slide in from left
    const titles = sectionRef.current.querySelectorAll('.section-title');
    animate(titles as unknown as string, {
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 600,
      delay: stagger(100, { start: 400 }),
      ease: 'outQuart',
    });

    // Skill tags pop-in with stagger from center
    const tags = sectionRef.current.querySelectorAll('.tag');
    animate(tags as unknown as string, {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 400,
      delay: stagger(50, { start: 600, from: 'center' }),
      ease: 'outBack',
    });

    // Language items slide in from right
    const langItems = sectionRef.current.querySelectorAll('.language-item');
    animate(langItems as unknown as string, {
      opacity: [0, 1],
      translateX: [30, 0],
      duration: 500,
      delay: stagger(100, { start: 700 }),
      ease: 'outQuart',
    });
  }, []);

  return (
    <section ref={sectionRef} className="skills-section glass-panel" style={{ opacity: 0 }}>
      <div className="skills-container">
        <div className="skill-group">
          <h2 className="section-title" style={{ opacity: 0 }}>Technical Skills</h2>
          <div className="tags">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="tag technical" style={{ opacity: 0, transform: 'scale(0)' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h2 className="section-title" style={{ opacity: 0 }}>Languages</h2>
          <div className="language-list">
            {languages.map((lang, index) => (
              <div key={index} className="language-item" style={{ opacity: 0 }}>
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
