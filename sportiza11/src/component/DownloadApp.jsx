import React from 'react'
import Man from '../assets/Man2.png';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/game.png';
import Logo3 from '../assets/logo3.png';

const DownloadApp = () => {
  return (
    <div className='download-container'>
      <div className='download-container-logo'>
        <img src={Man} alt="" />
      </div>
      <div className='download-container-text'>
        <div className='download-container-shape'>
          <h2><b>Download The Sportiza 11 App Now</b></h2>
          <p><b>Create Team, Join Contest & Win Exciting Cash Prizes.</b></p>
        </div>
        <h4 className='download-container-head'><b>Get The App And Win Crores</b></h4>

        <div className="download-cell">
            <div className="download-round-cell">
                <img src={Logo1} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Invite Your Friend & Win Big Rewards</span>
        </div>

        <div className="download-cell">
            <div className="download-round-cell">
                <img src={Logo2} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Play WIth Our 5+ Minnion Players in Sprotriza 11 Contest</span>
        </div>

        <div className="download-cell">
            <div className="download-round-cell">
                <img src={Logo3} alt="Logo" className="logo" />
             </div>
            <span className="download-text">Play More Our Sprotiza 11 Contest & Win Sportiza 11 Coins</span>
        </div>

      </div>
    </div>
  )
}

export default DownloadApp
