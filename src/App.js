import React from 'react';

import Home from './sections/Home';
import About from './sections/About';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
