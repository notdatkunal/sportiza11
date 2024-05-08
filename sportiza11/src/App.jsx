import './App.css';
import DownloadApp from './component/DownloadApp';
import Home from './component/Home';
import HowToPlay from './component/HowToPlay';
import Navbar from './component/Nav';
import SportizaFAQ from './component/SportizaFAQ';
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
    </div>
  );
}

export default App;
