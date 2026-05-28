import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { stagger, createTimeline } from 'animejs';
import './Timeline.css';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      company: 'SYNTAX TECHNOLOGIES Sdn Bhd',
      role: 'IT Support (SETAPAK)',
      period: 'June 2025 — Dec 2025',
      description: 'Acted as a consultant providing technical support for client applications and systems, assisting users in troubleshooting software issues and resolving technical problems efficiently. Responded promptly to user inquiries with clear and effective solutions, while collaborating closely with team members to ensure smooth and timely issue resolution. Application — SQL ACCOUNTING & SQL PAYROLL'
    },
    {
      company: 'TA Power Group Sdn Bhd',
      role: 'IT Support (Sunway Velocity)',
      period: 'Nov 2022 — Jan 2023',
      description: 'Assisted in hardware assembly, software installation, and basic IT support for client companies. Provided general technical assistance and troubleshooting support when required.'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const root = sectionRef.current;

    const tl = createTimeline({
      defaults: { ease: 'outQuart' },
    });

    // 1. Section panel fades in
    tl.add(root, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 700,
      ease: 'outExpo',
    }, 300);

    // 2. Section header slides in
    const header = root.querySelector('.section-header');
    if (header) {
      tl.add(header, {
        opacity: [0, 1],
        translateX: [-15, 0],
        duration: 500,
      }, 550);
    }

    // 3. Timeline line grows down
    const line = root.querySelector('.timeline-line');
    if (line) {
      tl.add(line, {
        scaleY: [0, 1],
        duration: 900,
        ease: 'outExpo',
      }, 650);
    }

    // 4. Timeline dots pop in
    tl.add('#experience-section .timeline-dot', {
      scale: [0, 1],
      duration: 500,
      delay: stagger(150),
      ease: 'outBack',
    }, 750);

    // 5. Timeline content cards slide in
    tl.add('#experience-section .timeline-content', {
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 500,
      delay: stagger(120),
    }, 800);

    tl.init();
  }, []);

  return (
    <section ref={sectionRef} id="experience-section" className="timeline-section glass-panel" style={{ opacity: 0 }}>
      <div className="section-header" style={{ opacity: 0 }}>
        <Briefcase className="section-icon" size={20} />
        <h2 className="section-title">Work Experience</h2>
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
