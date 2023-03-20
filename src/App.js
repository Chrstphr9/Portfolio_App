import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
