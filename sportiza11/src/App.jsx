import './App.css';
import ContestPage from './component/ContestPage';
import Disclaimer from './component/Disclaimer';
import DownloadApp from './component/DownloadApp';
import DownloadButton from './component/DownloadButton';
import EarnedWinnings from './component/EarnedWinnings';
import FantasyPointsComp from './component/FantasyPointsComp';
import Footer from './component/Footer';
import Home from './component/Home';
import HowToPlay from './component/HowToPlay';
import Introduction from './component/Introduction';
import Leagality from './component/Leagality';
import Navbar from './component/Nav';
import PointsSystem from './component/PointsSystem';
import RefundPolicy from './component/RefundPolicy';
import ResponsiblePlay from './component/ResponsiblePlay';
import ShippingPolicy from './component/ShippingPolicy';
import SportizaFAQ from './component/SportizaFAQ';
import TableComp from './component/TableComp';
import TrustedUser from './component/TrustedUser';
import WhyToChoose from './component/WhyToChoose';
import ContestUsComp from './component/ContectUsComp';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route  path="/"  element={<Home />} ></Route>
      <Route  path="/navbar"  element={<Introduction/>} ></Route>
      <Route  path="/disclaimer"  element={<Disclaimer/>} ></Route>
      <Route  path="/leagality"  element={<Leagality/>} ></Route>
      <Route  path="/responsible-play"  element={<ResponsiblePlay/>} ></Route>
      <Route  path="/refund-policy"  element={<RefundPolicy/>} ></Route>
      <Route  path="/shippling-delivery"  element={<ShippingPolicy/>} ></Route>
      <Route  path="/service-contest"  element={<ContestPage/>} ></Route>
      <Route  path="/fantasy-points"  element={<FantasyPointsComp/>} ></Route>
      <Route  path="/contact-us"  element={<ContestUsComp/>} ></Route>
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
