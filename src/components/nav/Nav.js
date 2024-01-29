import React from 'react';
import { useGlobalContext } from '../../context/AppContext';
import './nav.css';

const Nav = ({ setCurrentSection }) => {
  const { sections } = useGlobalContext();

  const handleClick = (section) => {
    setCurrentSection(section);
    window.location.hash = `#${section}`; 
  };

  return (
    <div>
      <ul className="nav justify-content-center custom-nav">
        {sections.map((section, index) => (
          <li className="nav-item" key={`${section}-${index}`}>
            <a className="nav-link" href={`#${section}`} onClick={() => handleClick(section)}>
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;