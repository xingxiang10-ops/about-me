import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { animate, stagger } from 'animejs';
import './Header.css';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const nameText = 'HONG XING XIANG';

  useEffect(() => {
    if (!headerRef.current) return;

    // Fade in the whole header panel
    animate(headerRef.current, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      ease: 'outExpo',
    });

    // Stagger letter animation for the name
    if (nameRef.current) {
      const letters = nameRef.current.querySelectorAll('.letter');
      animate(letters as unknown as string, {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.8, 1],
        duration: 600,
        delay: stagger(35, { from: 'center' }),
        ease: 'outExpo',
      });
    }

    // Animate the title
    const titleEl = headerRef.current.querySelector('.title');
    if (titleEl) {
      animate(titleEl, {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 700,
        delay: 500,
        ease: 'outQuart',
      });
    }

    // Stagger contact items
    const contactItems = headerRef.current.querySelectorAll('.contact-item');
    animate(contactItems as unknown as string, {
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
        <h1 ref={nameRef} className="name text-gradient">
          {nameText.split('').map((char, i) => (
            <span key={i} className="letter" style={{ opacity: 0, display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
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
