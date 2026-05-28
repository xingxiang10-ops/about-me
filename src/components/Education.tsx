import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { stagger, createTimeline } from 'animejs';
import './Timeline.css';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      institution: 'Tunku Abdul Rahman University of Management and Technology (TARUMT)',
      location: 'Kuala Lumpur Main Campus, Malaysia',
      period: 'Nov 2023 — Dec 2025',
      achievement: 'Awarded Bachelor Degree in Software Systems Development in Year 2025.'
    },
    {
      institution: 'Tunku Abdul Rahman University of Management and Technology (TARUMT)',
      location: 'Kuala Lumpur Main Campus, Malaysia',
      period: 'June 2021 — Nov 2023',
      achievement: 'Awarded Diploma in Information Technology with merit in Year 2023.'
    },
    {
      institution: 'SMJK CHI WEN',
      location: 'Negeri Sembilan, Malaysia',
      period: '2015 — 2021',
      achievement: 'Achieved Sijil Pelajaran Malaysia (SPM) in June 2021.'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const root = sectionRef.current;

    const tl = createTimeline({
      defaults: { ease: 'outQuart' },
    });

    // 1. Section panel
    tl.add(root, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 700,
      ease: 'outExpo',
    }, 500);

    // 2. Header slides in
    const header = root.querySelector('.section-header');
    if (header) {
      tl.add(header, {
        opacity: [0, 1],
        translateX: [-15, 0],
        duration: 500,
      }, 750);
    }

    // 3. Timeline line grows
    const line = root.querySelector('.timeline-line');
    if (line) {
      tl.add(line, {
        scaleY: [0, 1],
        duration: 1000,
        ease: 'outExpo',
      }, 850);
    }

    // 4. Dots pop in
    tl.add('#education-section .timeline-dot', {
      scale: [0, 1],
      duration: 500,
      delay: stagger(120),
      ease: 'outBack',
    }, 950);

    // 5. Content slides in
    tl.add('#education-section .timeline-content', {
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 500,
      delay: stagger(100),
    }, 1000);

    tl.init();
  }, []);

  return (
    <section ref={sectionRef} id="education-section" className="timeline-section glass-panel" style={{ opacity: 0 }}>
      <div className="section-header" style={{ opacity: 0 }}>
        <GraduationCap className="section-icon" size={20} />
        <h2 className="section-title">Education</h2>
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
