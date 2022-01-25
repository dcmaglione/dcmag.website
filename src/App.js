import React from 'react';

import Home from './components/Home';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Education from './components/Education';

export default function App() {
  return (
    <main className="bg-gray-900">
      <div>
        <Home />
      </div>
    </main>
  );
}

/*
export default function App() {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <div>
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
*/
