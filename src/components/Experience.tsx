import React from 'react';
import { Briefcase } from 'lucide-react';
import './Timeline.css';

const Experience: React.FC = () => {
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

  return (
    <section className="timeline-section glass-panel animate-fade-in-up delay-200">
      <div className="section-header">
        <Briefcase className="section-icon" size={24} />
        <h2 className="section-title">Work Experience (Intern)</h2>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
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
