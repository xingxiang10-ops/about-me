import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

const App: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      animate(footerRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 1500,
        ease: 'outQuart',
      });
    }
  }, []);

  return (
    <div className="app-container">
      <ParticleBackground />
      <main className="container main-content">
        <Header />
        
        <div className="content-grid">
          <div className="main-column">
            <Experience />
            <Education />
          </div>
          <div className="sidebar-column">
            <Skills />
          </div>
        </div>
        
        <footer ref={footerRef} className="footer" style={{ opacity: 0 }}>
          <p>© {new Date().getFullYear()} Hong Xing Xiang. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
