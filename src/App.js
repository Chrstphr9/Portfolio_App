import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Service2 from './components/Service2';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Service2 />
    </div>
  );
}

export default App;
