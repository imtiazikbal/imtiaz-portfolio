import React from 'react';
import './App.css';
import HeroSection from './sections/HeroSection';
import ExpertiseSection from './sections/ExpertiseSection';
import ProjectShowcase from './sections/ProjectShowcase';
import Navbar from './sections/NavBar';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <ProjectShowcase />
    </div>
  );
}

export default App;
