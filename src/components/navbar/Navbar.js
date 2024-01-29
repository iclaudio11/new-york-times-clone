import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/it';
import Nav from '../nav/Nav';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import NewSection from '../newsSection/NewsSection'; 
import './navBar.css';

const Navbar = () => {
  const currentDate = moment().locale('en').format('dddd, D MMMM YYYY');
  const [currentSection, setCurrentSection] = useState('Home');

  const handleSetCurrentSection = (section) => {
    setCurrentSection(section);
  };

  const navigateToHome = () => {
    setCurrentSection('Home'); 
    window.location.href = '/'; 
  };

  return (
    <div>
      <nav className="navbar">
        <div className='top-section'>
          <div>
            <div className='hamburger'>
              <HamburgerMenu
                sections={['Home', 'World', 'U.S.', 'Politics', 'N.Y.', 'Business', 'Art', 'Opinion', 'Health', 'Real Estate', 'Technology', 'Books']}
                setCurrentSection={handleSetCurrentSection}
              />
            </div>
          </div>
          <div className="logo" onClick={navigateToHome}>
            <img
              src={require('../../assets/images/thenewyorktimeslogo.png')}
              alt="New York Times Logo"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="current-date">
            {currentDate}
          </div>
          <hr className="divider" />
          <Nav setCurrentSection={handleSetCurrentSection} />
          <hr className="divider" />
        </div>
      </nav>
      <NewSection section={currentSection} />
    </div>
  );
};

export default Navbar;
