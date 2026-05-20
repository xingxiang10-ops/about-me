import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { animate, stagger } from 'animejs';
import './Timeline.css';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      institution: 'Tunku Abdul Rahman University Of Management and Technology (TARUMT)',
      location: 'Kuala Lumpur Main Campus, Malaysia',
      period: 'Nov 2023 - Dec 2025',
      achievement: 'Awarded Bachelor Degree in Software Systems Development in Year 2025.'
    },
    {
      institution: 'Tunku Abdul Rahman University Of Management and Technology (TARUMT)',
      location: 'Kuala Lumpur Main Campus, Malaysia',
      period: 'June 2021 - Nov 2023',
      achievement: 'Awarded Diploma In Information Technology with merit in Year 2023.'
    },
    {
      institution: 'SMJK CHI WEN',
      location: 'Negeri Sembilan, Malaysia',
      period: '2015-2021',
      achievement: 'Achieved Sijil Pelajaran Malaysia(SPM) in June 2021.'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade in the section panel
    animate(sectionRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      delay: 500,
      ease: 'outExpo',
    });

    // Animate the section header
    const header = sectionRef.current.querySelector('.section-header');
    if (header) {
      animate(header, {
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600,
        delay: 700,
        ease: 'outQuart',
      });
    }

    // Animate timeline line growing
    const timelineLine = sectionRef.current.querySelector('.timeline-line');
    if (timelineLine) {
      animate(timelineLine, {
        scaleY: [0, 1],
        duration: 1000,
        delay: 800,
        ease: 'outQuart',
      });
    }

    // Timeline dots scale in with elastic easing
    const dots = sectionRef.current.querySelectorAll('.timeline-dot');
    animate(dots as unknown as string, {
      scale: [0, 1],
      duration: 600,
      delay: stagger(180, { start: 900 }),
      ease: 'outBack',
    });

    // Timeline items slide in from left
    const items = sectionRef.current.querySelectorAll('.timeline-content');
    animate(items as unknown as string, {
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 600,
      delay: stagger(120, { start: 950 }),
      ease: 'outQuart',
    });
  }, []);

  return (
    <section ref={sectionRef} className="timeline-section glass-panel" style={{ opacity: 0 }}>
      <div className="section-header" style={{ opacity: 0 }}>
        <GraduationCap className="section-icon" size={24} />
        <h2 className="section-title">Educational History</h2>
      </div>
      
      <div className="timeline">
        <div className="timeline-line" style={{ transform: 'scaleY(0)', transformOrigin: 'top' }} />
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" style={{ transform: 'scale(0)' }} />
            <div className="timeline-content" style={{ opacity: 0 }}>
              <div className="timeline-header">
                <h3 className="company">{edu.institution}</h3>
                <span className="period">{edu.period}</span>
              </div>
              <h4 className="role">{edu.location}</h4>
              <p className="description">{edu.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
