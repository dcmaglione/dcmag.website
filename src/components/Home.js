import React from 'react';
import Socials from '../containers/Socials';
import { Link } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';

export default function Home() {
  return (
    <section
      id="home"
      className="h-full w-full flex align-center justify-center"
      style={{
        height: 'calc(100vh - 76px)',
      }}
    >
      <div className="flex flex-col flex-wrap justify-center items-center m-auto">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-sans font-bold text-center md:w-auto xl:text-8xl md:text-7xl text-6xl text-white pb-6">
          DOMINIC MAGLIONE
        </h1>
        <h2 className="font-serif font-bold text-center md:w-auto xl:text-2xl md:text-xl text-lg text-gray-200">
          Simplicity, carried to the extreme, becomes elegance.
        </h2>
        <Socials />
        <div
          className="flex justify-center items-center absolute text-white hover:text-gray-400 text-6xl z-0 cursor-pointer transform -translate-y-full"
          style={{ top: '99vh' }}
        >
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
            to="about"
          >
            {<FiChevronDown className="animate-bounce" />}
          </Link>
        </div>
      </div>
    </section>
  );
}
