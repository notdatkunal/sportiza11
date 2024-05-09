import React, { useState } from 'react';
import T20Content from './T20Content';
import TestComponent from './TestComponent';

const PointsSystem = () => {
  const [activeItem, setActiveItem] = useState('T20'); // State to track active item

  const handleItemClick = (gameType) => {
    setActiveItem(gameType); // Update active item when clicked
  };

  // Function to render content based on active item
  const renderContent = () => {
    switch (activeItem) {
      case 'T20':
        return <div><T20Content /></div>;
      case 'Test':
        return <div><TestComponent /></div>;
      case 'ODI':
        return <div><T20Content /></div>;
      case 'T10':
        return <div><T20Content /></div>;
      default:
        return null;
    }
  };

  return (
    <div className='point-system'>
      <h2>FANTASY POINTS SYSTEM IN Sportiza11</h2>
      <div>
        <ul className='game-list'>
          <li>
            <a
              className={activeItem === 'T20' ? 'active' : ''}
              onClick={() => handleItemClick('T20')}
              href="#T20"
            >
              T20
            </a>
          </li>
          <li>
            <a
              className={activeItem === 'Test' ? 'active' : ''}
              onClick={() => handleItemClick('Test')}
              href="#Test"
            >
              Test
            </a>
          </li>
          <li>
            <a
              className={activeItem === 'ODI' ? 'active' : ''}
              onClick={() => handleItemClick('ODI')}
              href="#ODI"
            >
              ODI
            </a>
          </li>
          <li>
            <a
              className={activeItem === 'T10' ? 'active' : ''}
              onClick={() => handleItemClick('T10')}
              href="#T10"
            >
              T10
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        {renderContent()} {/* Render content based on active item */}
      </div>

        <div className='fantasy-point-text'>
            <h3>Rules about substitutions:</h3>
            <p>1. In accordance with our Fantasy Point System, each X-Factor substitute will receive four points for being announced and <br />
                additional points for any contributions they make.</p>
            <p>2. Concussion and COVID-19 Substitutes will receive four points for participating (only in T20s, ODs, Tests, T10s, and The Hundred), <br />
            and they will receive points for all of their contributions according to the Fantasy Point System, if allowed under the relevant <br />
             tournament rules and regulations.</p>
             <p>3. No points will be given for any contributions made by substitutes other than those for concussions, COVID-19, or X-factor. <br />
             In the Big Bash League, a player will receive credit for his efforts if he is substituted out for an X-Factor player and later returns <br />
             to the pitch. A player will not receive credit for any of his efforts, though, if he enters the game as a replacement and was not included <br />
             in the lineups that were declared (except from COVID-19 and concussion substitutes)</p>
        </div>

    </div>
  );
};

export default PointsSystem;
