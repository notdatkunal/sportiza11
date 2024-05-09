import './App.css';
import DownloadApp from './component/DownloadApp';
import Home from './component/Home';
import HowToPlay from './component/HowToPlay';
import Introduction from './component/Introduction';
import Navbar from './component/Nav';
import PointsSystem from './component/PointsSystem';
import SportizaFAQ from './component/SportizaFAQ';
import TableComp from './component/TableComp';
import TrustedUser from './component/TrustedUser';
import WhyToChoose from './component/WhyToChoose';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HowToPlay />
      <WhyToChoose />
      <TrustedUser />
      <DownloadApp />
      <SportizaFAQ />
      <Introduction />
      <TableComp />
      <PointsSystem />
    </div>
  );
}

export default App;
