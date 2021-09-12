import React from 'react';

import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-20">
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            <a href="#about" className="text-2xl">
              Dominic Maglione
            </a>
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-lg justify-center">
          <Link activeClass="active" to="education" spy={true} smooth={true}>
            <a href="#education" className="mx-4 hover:text-white">
              Education
            </a>
          </Link>
          <Link activeClass="active" to="experience" spy={true} smooth={true}>
            <a href="#experience" className="mx-4 hover:text-white">
              Experience
            </a>
          </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true}>
            <a href="#projects" className="mx-4 mb-4 hover:text-white">
              Projects
            </a>
          </Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true}>
            <a href="#skills" className="mx-4 mb-4 hover:text-white">
              Skills
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
