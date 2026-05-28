import React, { useEffect, useRef } from 'react';
import { stagger, createTimeline } from 'animejs';
import { Code, Globe } from 'lucide-react';
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
    const root = sectionRef.current;

    const tl = createTimeline({
      defaults: { ease: 'outQuart' },
    });

    // 1. Section fades in
    tl.add(root, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 700,
      ease: 'outExpo',
    }, 200);

    // 2. Group titles slide in
    tl.add('.skills-section .skill-group-title', {
      opacity: [0, 1],
      translateX: [-15, 0],
      duration: 500,
      delay: stagger(100),
    }, 500);

    // 3. Tags pop in with stagger from first
    tl.add('.skills-section .tag', {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 350,
      delay: stagger(40, { from: 'first' }),
      ease: 'outBack',
    }, 650);

    // 4. Language items slide in from right
    tl.add('.skills-section .language-item', {
      opacity: [0, 1],
      translateX: [20, 0],
      duration: 400,
      delay: stagger(80),
    }, 800);

    tl.init();
  }, []);

  return (
    <section ref={sectionRef} className="skills-section glass-panel" style={{ opacity: 0 }}>
      <div className="skills-container">
        <div className="skill-group">
          <h3 className="skill-group-title" style={{ opacity: 0 }}>
            <Code size={14} />
            Technical Skills
          </h3>
          <div className="tags">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="tag technical" style={{ opacity: 0, transform: 'scale(0)' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-group-title" style={{ opacity: 0 }}>
            <Globe size={14} />
            Languages
          </h3>
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
