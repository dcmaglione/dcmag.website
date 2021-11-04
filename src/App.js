import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Route exact path="/about">
              <About />
              <Education />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}
