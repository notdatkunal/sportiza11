import './App.css';
import Home from './component/Home';
import HowToPlay from './component/HowToPlay';
import Navbar from './component/Nav';
import WhyToChoose from './component/WhyToChoose';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HowToPlay />
      <WhyToChoose />
    </div>
  );
}

export default App;
