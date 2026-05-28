import React, { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';
import './ParticleBackground.css';

const SNOWFLAKE_COUNT = 120;

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Anime.js snow falling animation
    animate('.snowflake', {
      translateY: () => [utils.random(-50, 0), window.innerHeight + 100],
      translateX: () => [utils.random(-20, 20), utils.random(-80, 80)],
      opacity: [
        { to: () => utils.random(0.2, 0.8), duration: 800, easing: 'linear' },
        { to: 0, duration: 1500, delay: () => utils.random(3000, 8000), easing: 'linear' }
      ],
      duration: () => utils.random(6000, 12000),
      delay: () => utils.random(0, 10000), // Stagger start times randomly
      easing: 'linear',
      loop: true
    });
  }, []);

  const snowflakes = Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => {
    const size = utils.random(2, 6);
    return (
      <div
        key={i}
        className="snowflake"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${utils.random(0, 100)}%`,
          top: `-20px`,
          backgroundColor: '#fff',
          opacity: 0,
        }}
      />
    );
  });

  return (
    <div className="particle-background">
      <div ref={containerRef} className="snow-container">
        {snowflakes}
      </div>
    </div>
  );
};

export default ParticleBackground;
