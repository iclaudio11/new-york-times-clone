import React from 'react';
import '../assets/css/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <hr />
      <p className='copyright'>© Copyright 2024 by Claudio Iaculo</p>
      <div className='icons'>
        <a href="https://www.linkedin.com/in/claudioiaculo/" target="_blank" rel="noopener noreferrer">
          <img
            src={require('../assets/images/linkedin.png')}
            alt="Linkedin Icon"
          />
        </a>
        <a href="https://github.com/iclaudio11" target="_blank" rel="noopener noreferrer">
          <img
            src={require('../assets/images/github.png')}
            alt="GitHub Icon"
          />
        </a>
        <a href="https://iclaudio11.github.io/my-portfolio-website/" target="_blank" rel="noopener noreferrer">
          <img
            src={require('../assets/images/icon-account.png')}
            alt="Website Icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
