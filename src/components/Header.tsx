import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { animate, stagger } from 'animejs';
import './Header.css';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const nameText = 'HONG XING XIANG';

  useEffect(() => {
    if (!headerRef.current) return;
    const root = headerRef.current;

    // Fade in the whole header panel
    animate(root, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      ease: 'outExpo',
    });

    // Animate the name — scale up with a subtle bounce
    const nameEl = root.querySelector('.name');
    if (nameEl) {
      animate(nameEl, {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.9, 1],
        duration: 700,
        delay: 200,
        ease: 'outExpo',
      });
    }

    // Animate the title
    const titleEl = root.querySelector('.title');
    if (titleEl) {
      animate(titleEl, {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 700,
        delay: 500,
        ease: 'outQuart',
      });
    }

    // Stagger contact items using CSS selector scoped to header
    animate('.header .contact-item', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 500,
      delay: stagger(80, { start: 700 }),
      ease: 'outQuart',
    });
  }, []);

  return (
    <header ref={headerRef} className="header glass-panel" style={{ opacity: 0 }}>
      <div className="header-content">
        <h1 className="name" style={{ opacity: 0 }}>
          {nameText}
        </h1>
        <p className="title" style={{ opacity: 0 }}>Software Systems Development Student &amp; IT Professional</p>
        
        <div className="contact-info">
          <a href="tel:+601123407130" className="contact-item" style={{ opacity: 0 }}>
            <Phone size={18} />
            <span>+6011-23407130</span>
          </a>
          <a href="mailto:xingxiang10@gmail.com" className="contact-item" style={{ opacity: 0 }}>
            <Mail size={18} />
            <span>xingxiang10@gmail.com</span>
          </a>
          <div className="contact-item" style={{ opacity: 0 }}>
            <MapPin size={18} />
            <span>Malaysia</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
