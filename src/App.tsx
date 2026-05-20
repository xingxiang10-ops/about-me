import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
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
        
        <footer className="footer animate-fade-in-up delay-400">
          <p>© {new Date().getFullYear()} Hong Xing Xiang. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
