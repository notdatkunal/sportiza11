import React from 'react';
import Man from '../assets/why_man.png';

import Logo15 from '../assets/EasyToPlay.png';
import Logo2 from '../assets/Team.png';
import Logo3 from '../assets/BudgetFriendly.png';
import Logo4 from '../assets/cash.png';
import Logo5 from '../assets/WinPrize.png';
import Logo6 from '../assets/Deals.png';
import Logo7 from '../assets/BallingLogo.png';
import Logo8 from '../assets/DualTeam.png';
import Logo9 from '../assets/atm.png';

const WhyToChoose = () => {
  return (
    <div className="why-logo-container">
      <div className = "why-head-container">
          <h2>Why To Choose Sportiza11 ?</h2>
      </div>
      <div className="why-man-container">
        <img src={Man} alt="" />
      </div>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo15} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Easy To Play in Sportiza11</span>
                </div>
              </td>
              <td>
            <div className="cell">
            <div className="round-cell">
              <img src={Logo15} alt="Logo" className="logo" />
            </div>
            <span className="text">Regular Many Deals & <br /> Available</span>
         </div>
        </td>

            </tr>
            <tr>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo2} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Easy To Create Your Dream <br /> Team In Sportiza11</span>
                </div>
              </td>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo3} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Specific Batting Contest In <br />Sportiza11</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo4} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Every game Entry Fees Is <br /> Budget Friendly According <br /> To Everyone</span>
                </div>
              </td>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo5} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Specific Balling Contest In <br />Sportiza11</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo6} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Easy To Withdraw Cash Easily <br /> From Your Winning Game Point</span>
                </div>
              </td>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo7} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Create Your Second Team In <br /> One Contest</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo8} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Chances To Win Prize From Every <br /> Game On Sportiza11</span>
                </div>
              </td>
              <td>
                <div className="cell">
                  <div className="round-cell">
                    <img src={Logo9} alt="Logo" className="logo" />
                  </div>
                  <span className="text">Instant Withdrawn Your Cash <br /> Prizes</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhyToChoose;
