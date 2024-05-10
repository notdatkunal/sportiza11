import React from 'react'
import HowToPlay from './HowToPlay'
import DownloadButton from './DownloadButton'
import EarnedWinnings from './EarnedWinnings'
import WhyToChoose from './WhyToChoose';
import TrustedUser from './TrustedUser';
import DownloadApp from './DownloadApp';
import SportizaFAQ from './SportizaFAQ';
import Introduction from './Introduction';
import TableComp from './TableComp';
import PointsSystem from './PointsSystem';
const Home = () => {
  return (
    <div>
      <HowToPlay />
      <WhyToChoose />
      <TrustedUser/>
      <DownloadApp />
      <SportizaFAQ />
      <Introduction />
      <TableComp />
      <PointsSystem />
      <EarnedWinnings />
      <DownloadButton />
    </div>
  )
}

export default Home
