import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Timeline.css';

const Education: React.FC = () => {
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

  return (
    <section className="timeline-section glass-panel animate-fade-in-up delay-300">
      <div className="section-header">
        <GraduationCap className="section-icon" size={24} />
        <h2 className="section-title">Educational History</h2>
      </div>
      
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
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
