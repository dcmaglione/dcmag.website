import React from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font font-sans">
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
