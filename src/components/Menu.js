import React from 'react';
import { Link } from 'react-scroll';
import '../styles/index.css';

// Names of components
const links = ['/about', '/experience', '/projects', '/skills'];
const prompt = '>$ /home/dcmaglione';

export default function Menu() {
  return (
    <div id="menu" className="container flex flex-wrap md:flex-row items-center bg-gray-900 mx-auto px-4 md:px-8 py-5">
      <div className="mb-4 md:mb-0 text-white">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={600}
          to="root"
          className="text-2xl hover:text-gray-400 cursor-pointer"
        >
          {prompt}
        </Link>
        <span class="blinking"></span>
      </div>
      <nav className="flex flex-wrap justify-center items-center md:ml-auto md:py-1 md:pl-4">
        {links.map((link, index) => {
          return (
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={600}
              to={link.replace('/', '')}
              key={index}
              className="mx-4 hover:text-white cursor-pointer"
            >
              {'~' + link}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
