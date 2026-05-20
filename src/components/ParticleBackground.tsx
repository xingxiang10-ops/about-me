import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import './ParticleBackground.css';

const PARTICLE_COUNT = 45;

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll('.particle');

    // Animate each particle with unique random paths
    animate(particles as unknown as string, {
      translateX: () => `${Math.random() * 200 - 100}px`,
      translateY: () => `${Math.random() * 200 - 100}px`,
      scale: () => [Math.random() * 0.5 + 0.5, Math.random() * 1.5 + 0.5],
      opacity: () => [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.2],
      duration: () => Math.random() * 6000 + 4000,
      delay: stagger(80, { from: 'center' }),
      ease: 'inOutSine',
      loop: true,
      alternate: true,
    });
  }, []);

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const size = Math.random() * 4 + 2;
    const colors = [
      'rgba(139, 92, 246, 0.15)',   // accent-primary
      'rgba(59, 130, 246, 0.12)',    // accent-secondary
      'rgba(139, 92, 246, 0.08)',    // subtle primary
      'rgba(59, 130, 246, 0.06)',    // subtle secondary
    ];
    const color = colors[i % colors.length];

    return (
      <div
        key={i}
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: color,
          opacity: 0,
        }}
      />
    );
  });

  return (
    <div ref={containerRef} className="particle-background">
      {particles}
    </div>
  );
};

export default ParticleBackground;
