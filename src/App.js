
import './App.css';
import Navbar from './navbar/Navbar';
import Intro from './intro/Intro';
import About from './about/About';
import Skills from './Skills/Skills';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Contact/>
    
    </div>
  );
}

export default App;
