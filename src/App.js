import React from 'react';
import Home from './assets/components/Home';
import NavBar from './assets/components/NavBar';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Portfolio from './assets/components/Portfolio';
import SocialLinks from './assets/components/SocialLinks';
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <SocialLinks/>
    </div>
  );
}

export default App;
