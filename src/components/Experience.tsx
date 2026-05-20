import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { animate, stagger } from 'animejs';
import './Timeline.css';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      company: 'SYNTAX TECHNOLOGIES Sdn Bhd',
      role: 'IT Support (SETAPAK)',
      period: 'June 2025 to Dec 2025',
      description: 'Acted as a consultant providing technical support for client applications and systems, assisting users in troubleshooting software issues and resolving technical problems efficiently. Responded promptly to user inquiries with clear and effective solutions, while collaborating closely with team members to ensure smooth and timely issue resolution. Application - SQL ACCOUNTING & SQL PAYROLL'
    },
    {
      company: 'TA Power Group Sdn Bhd',
      role: 'IT Support (Sunway Velocity)',
      period: 'Nov 2022 to Jan 2023',
      description: 'Assisted in hardware assembly, software installation, and basic IT support for client companies. Provided general technical assistance and troubleshooting support when required.'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade in the section panel
    animate(sectionRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      delay: 300,
      ease: 'outExpo',
    });

    // Animate the section header
    const header = sectionRef.current.querySelector('.section-header');
    if (header) {
      animate(header, {
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600,
        delay: 500,
        ease: 'outQuart',
      });
    }

    // Animate timeline line growing
    const timelineLine = sectionRef.current.querySelector('.timeline-line');
    if (timelineLine) {
      animate(timelineLine, {
        scaleY: [0, 1],
        duration: 800,
        delay: 600,
        ease: 'outQuart',
      });
    }

    // Timeline dots scale in with elastic easing
    const dots = sectionRef.current.querySelectorAll('.timeline-dot');
    animate(dots as unknown as string, {
      scale: [0, 1],
      duration: 600,
      delay: stagger(200, { start: 700 }),
      ease: 'outBack',
    });

    // Timeline items slide in from left
    const items = sectionRef.current.querySelectorAll('.timeline-content');
    animate(items as unknown as string, {
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 600,
      delay: stagger(150, { start: 750 }),
      ease: 'outQuart',
    });
  }, []);

  return (
    <section ref={sectionRef} className="timeline-section glass-panel" style={{ opacity: 0 }}>
      <div className="section-header" style={{ opacity: 0 }}>
        <Briefcase className="section-icon" size={24} />
        <h2 className="section-title">Work Experience (Intern)</h2>
      </div>
      
      <div className="timeline">
        <div className="timeline-line" style={{ transform: 'scaleY(0)', transformOrigin: 'top' }} />
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" style={{ transform: 'scale(0)' }} />
            <div className="timeline-content" style={{ opacity: 0 }}>
              <div className="timeline-header">
                <h3 className="company">{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="role">{exp.role}</h4>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
