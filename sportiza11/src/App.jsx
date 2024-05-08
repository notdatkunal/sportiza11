import './App.css';
import DownloadApp from './component/DownloadApp';
import Home from './component/Home';
import HowToPlay from './component/HowToPlay';
import Introduction from './component/Introduction';
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
      <Introduction />
    </div>
  );
}

export default App;
