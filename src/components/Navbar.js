import React from 'react';
import '../index.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const links = ['/about', '/experience', '/projects', '/skills'];
const prompt = '>$ /home/dcmaglione';

export default function Navbar() {
  const location = useLocation();

  const [path, setPath] = useState(null);

  useEffect(() => {
    setPath(window.location.hash.replace('#', ''));
  }, [location]);

  return (
    <header className="bg-gray-800 sticky top-0 z-20">
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/" className="text-2xl hover:text-gray-400">
            {prompt + path}
          </Link>
          <span class="blinking"></span>
        </div>
        <nav className="md:ml-auto md:py-1 md:pl-4 md:border-r-2 border-gray-600	flex flex-wrap items-center text-lg justify-center">
          {links.map((link, index) => {
            return (
              <Link to={link} key={index} className="mx-4 hover:text-white">
                {'~' + link}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
