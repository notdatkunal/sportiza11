import React from 'react';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Arrow from '../assets/right-arrow.png';

const RoundShapes = () => {
  return (
    <div className="round-shapes-container">
      <div className="round-shape">
        <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="49.5" cy="49.5" r="49" fill="#D8BDBD" />
          <image href={Logo1} x="25.5" y="25.5" width="48" height="48" />
        </svg>
        <p><b>Sign Up Or Log In Your <br />Free Sportiza11 Account.</b></p>
      </div>
      <div className="arrow">
        <img src={Arrow} alt="Arrow" />
      </div>
      <div className="round-shape">
        <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="49.5" cy="49.5" r="49" fill="#D8BDBD" />
          <image href={Logo2} x="25.5" y="25.5" width="48" height="48" />
        </svg>
        <p><b>Create Your Dream Team <br />From Each Two teams.</b></p>
      </div>
      <div className="arrow">
        <img src={Arrow} alt="Arrow" />
      </div>
      <div className="round-shape">
        <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="49.5" cy="49.5" r="49" fill="#D8BDBD" />
          <image href={Logo3} x="25.5" y="25.5" width="48" height="48" />
        </svg>
        <p><b>Win Your Prize & Withdraw <br />Whenever You Can.</b></p>
      </div>
    </div>
  );
};

export default RoundShapes;

