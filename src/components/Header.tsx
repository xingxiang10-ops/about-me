import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { stagger, createTimeline } from 'animejs';
import './Header.css';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const root = headerRef.current;

    const tl = createTimeline({
      defaults: { ease: 'outExpo' },
    });

    // 1. Panel slides up and fades in
    tl.add(root, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900,
    }, 0);

    // 2. Name slides up with scale
    const nameEl = root.querySelector('.name');
    if (nameEl) {
      tl.add(nameEl, {
        opacity: [0, 1],
        translateY: [25, 0],
        scale: [0.92, 1],
        duration: 800,
      }, 300);
    }

    // 3. Subtitle fades in
    const subtitle = root.querySelector('.subtitle');
    if (subtitle) {
      tl.add(subtitle, {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 600,
        ease: 'outQuart',
      }, 550);
    }

    // 4. Contact items stagger in
    tl.add('.header .contact-item', {
      opacity: [0, 1],
      translateY: [15, 0],
      scale: [0.9, 1],
      duration: 500,
      delay: stagger(70),
      ease: 'outQuart',
    }, 750);

    tl.init();
  }, []);

  return (
    <header ref={headerRef} className="header glass-panel" style={{ opacity: 0 }}>
      <div className="header-content">
        <h1 className="name" style={{ opacity: 0 }}>
          HONG XING XIANG
        </h1>
        <p className="subtitle" style={{ opacity: 0 }}>
          Software Systems Development Student &amp; IT Professional
        </p>
        
        <div className="contact-info">
          <a href="tel:+601123407130" className="contact-item" style={{ opacity: 0 }}>
            <Phone size={16} />
            <span>+6011-23407130</span>
          </a>
          <a href="mailto:xingxiang10@gmail.com" className="contact-item" style={{ opacity: 0 }}>
            <Mail size={16} />
            <span>xingxiang10@gmail.com</span>
          </a>
          <div className="contact-item" style={{ opacity: 0 }}>
            <MapPin size={16} />
            <span>Malaysia</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
