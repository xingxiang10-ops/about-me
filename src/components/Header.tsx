import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header glass-panel animate-fade-in-up">
      <div className="header-content">
        <h1 className="name text-gradient">HONG XING XIANG</h1>
        <p className="title">Software Systems Development Student & IT Professional</p>
        
        <div className="contact-info">
          <a href="tel:+601123407130" className="contact-item">
            <Phone size={18} />
            <span>+6011-23407130</span>
          </a>
          <a href="mailto:xingxiang10@gmail.com" className="contact-item">
            <Mail size={18} />
            <span>xingxiang10@gmail.com</span>
          </a>
          <div className="contact-item">
            <MapPin size={18} />
            <span>Malaysia</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
