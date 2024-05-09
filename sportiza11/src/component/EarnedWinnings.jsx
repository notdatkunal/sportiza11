import React from 'react'
import Logo from '../assets/8.png';
import Image from '../assets/image.png';


const EarnedWinnings = () => {
    return (
      <div className="wrapper-cont">
        <div className='winnings-logo'>
          <img src={Logo} alt="Logo" style={{ width: 575, height: 500 }}/>
        </div>
  
        <div className='winnings-container'>
          <h3>You’ve Earned Winnings!</h3>
          <p>Now it’s time to claim your winnings. Once the match <br />
          completes check your scorecard for your rank & WINNINGS!</p>
          <img src={Image} alt="Logo"/>
          <h3>Winnings in User Account!</h3>
          <p>Your winnings are credited soon after the completion <br />
          of the match. Check & Enjoy!</p>
        </div>
      </div>
    )
  }
  
  export default EarnedWinnings;