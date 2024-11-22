import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Project from './components/Project';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Project />
      <Contact />
      <ScrollToTop /> 
    </div>
  );
}

export default App;