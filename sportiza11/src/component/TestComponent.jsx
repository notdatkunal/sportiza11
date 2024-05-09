import React from 'react'
import Logo1 from '../assets/BattingLogo.png';
import Logo2 from '../assets/BallingLogo.png';
import Logo3 from '../assets/Fielding.png';
import Logo4 from '../assets/menu.png';
import Logo5 from '../assets/rate.png';

const TestComponent = () => {
  return (
    <div>
        <div className="accordion-wrapper">
        <div className="accordion">
        <input type="radio" name="radio-a" id="check10" checked />
        <label className="accordion-label" htmlFor="check10">
        <div className="points-cell">
            <div className="download-round-cell">
                <img src={Logo1} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Batting Points</span>
        </div>
        </label>
        <div className="accordion-content">
          <div>Every run scored: 1</div>
          <div>Every boundary hit: 1</div>
          <div>Every Six Hit: 2</div>
          <div>Half Century (50 runs scored by a batsman in a single innings): 8</div>
          <div>Half Century (100 runs scored by a batsman in a single innings): 16</div>
          <div>Dismissal for a Duck (only for batsmen, wicket-keepers and all-rounders): -2</div>
          <div>30 run Bonus: 4</div>
        </div>
      </div>
      <div className="accordion">
        <input type="radio" name="radio-a" id="check11" checked />
        <label className="accordion-label" htmlFor="check11">
        <div className="points-cell">
            <div className="download-round-cell">
                <img src={Logo2} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Bowling Points</span>
        </div>
        </label>
        <div className="accordion-content">
          <div>Every wicket taken (excluding run out): 5</div>
          <div>3 wickets: 4</div>
          <div>4 wickets: 8</div>
          <div>5 wickets : 16</div>
          <div>Maiden over: 12</div>
          <div>Bonus (LBW / Bowled): -8</div>
          <div>30 run Bonus: 4</div>
        </div>
      </div>

      <div className="accordion">
        <input type="radio" name="radio-a" id="check12" checked />
        <label className="accordion-label" htmlFor="check12">
        <div className="points-cell">
            <div className="download-round-cell">
                <img src={Logo3} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Fielding Points</span>
        </div>
        </label>
        <div className="accordion-content">
          <div>Catch taken: 8</div>
          <div>Caught & Bowled: 33</div>
          <div>Stumping/ Run Out (direct): 12</div>
          <div>Run Out (Thrower) : 6</div>
          <div>Maiden over: 12</div>
          <div>Run Out (Catcher): 6</div>
          <div>3 Catch Bonus: 4</div>
        </div>
      </div>

      <div className="accordion">
        <input type="radio" name="radio-a" id="check13" checked />
        <label className="accordion-label" htmlFor="check13">
        <div className="points-cell">
            <div className="download-round-cell">
                <img src={Logo4} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Others Points</span>
        </div>
        </label>
        <div className="accordion-content">
          <div>Captain: 2</div>
          <div>Vice Captain: 1.5</div>
          <div>Stumping/ Run Out (direct): 12</div>
          <div>Being a part of the starting XI: 4</div>
        </div>
      </div>

      <div className="accordion">
        <input type="radio" name="radio-a" id="check14" checked />
        <label className="accordion-label" htmlFor="check14">
        <div className="points-cell">
            <div className="download-round-cell">
                <img src={Logo4} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Economy Rate Points</span>
        </div>
        </label>
        <div className="accordion-content">
          <div>Minimum overs bowled by player to be applicable: 2</div>
          <div>Below 5 runs per over: 6</div>
          <div>Between 5 and 5.99 runs per over: 4</div>
          <div>Between 6 and 7 runs per over: 2</div>
          <div>Between 10 and 11 runs per over: -2</div>
          <div>Between 11.01 and 12 runs per over: -4</div>
          <div>Above 12 runs per over: -6</div>
        </div>
      </div>


    </div>
    </div>
  )
}

export default TestComponent