import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Service2 from './components/Service2';
import CTA from './components/CTA';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Service2 />
      <CTA />
      <Contact />
    </div>
  );
}

export default App;
