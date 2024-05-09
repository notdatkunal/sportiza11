import React from 'react'
import Logo1 from '../assets/BattingLogo.png';
import Logo2 from '../assets/BallingLogo.png';
import Logo3 from '../assets/Fielding.png';
import Logo4 from '../assets/menu.png';
import Logo5 from '../assets/rate.png';

const T20Content = () => {
  return (
    <div>
        <div className="accordion-wrapper">
        <div className="accordion">
        <input type="radio" name="radio-a" id="check110" checked />
        <label className="accordion-label" htmlFor="check110">
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
        <input type="radio" name="radio-a" id="check111" checked />
        <label className="accordion-label" htmlFor="check111">
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
        <input type="radio" name="radio-a" id="check122" checked />
        <label className="accordion-label" htmlFor="check122">
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
        <input type="radio" name="radio-a" id="check133" checked />
        <label className="accordion-label" htmlFor="check133">
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
        <input type="radio" name="radio-a" id="check144" checked />
        <label className="accordion-label" htmlFor="check144">
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

      <div className="accordion">
        <input type="radio" name="radio-a" id="check155" checked />
        <label className="accordion-label" htmlFor="check155">
        <div className="points-cell">
            <div className="download-round-cell">
                <img src={Logo5} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Strike Rate (Except Bowler) Points</span>
        </div>
        </label>
        <div className="accordion-content">
          <div>Minimum balls faced by a player to be applicable: 10</div>
          <div>Between 60 and 70 runs per 100 balls: -2</div>
          <div>Between 50 and 59.99 runs per 100 balls: -4</div>
          <div>Below 50 runs per 100 balls: -6</div>
          <div>Between 130 and 150 runs per 100 ball: 2</div>
          <div>Between 150.01 and 170 runs per 100 balls: 4</div>
          <div>Above 170 runs per 100 balls: 6</div>
        </div>
      </div>


    </div>
    </div>
  )
}

export default T20Content