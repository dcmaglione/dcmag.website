import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  return (
    <Router>
      <main className="min-h-screen text-gray-400 bg-gray-900 body-font font-mono text-lg flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl font-sans">
          <Switch>
            <Route path="/about">
              <About />
              <Education />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}
