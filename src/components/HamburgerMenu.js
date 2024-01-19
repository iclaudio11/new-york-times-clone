import React, { useState } from 'react';
import '../assets/css/hamburgerMenu.css';

const HamburgerMenu = ({ sections, setCurrentSection }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClick = (section) => {
    setCurrentSection(section);
    setMenuOpen(false); 
    window.location.hash = `#${section}`; 
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <div className="menu">
          {sections.map((section) => (
            <a key={section} href={`#${section}`} onClick={() => handleClick(section)}>
              {section}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;