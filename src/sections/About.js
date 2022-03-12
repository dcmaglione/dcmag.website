import React from 'react';
import ProfilePic from '../images/profile-pic.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="flex xl:flex-row flex-col items-center m-auto mx-20 mb-14 pt-36 pb-20 bg-gray-900 text-white text-lg"
    >
      <div className="xl:ml-24 px-14 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:pl-8">
        <img className="rounded-full" src={ProfilePic} alt=" " />
      </div>
      <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start xl:text-left mb-16 l:mr-24 mt-14 xl:mt-0 md:mb-0 px-14 items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-8 font-sans font-bold text-white">
          Hello, I'm Dominic.
        </h1>
        <p className="mb-4 leading-relaxed">
          I'm a Sophomore at Boston University pursuing a B.A. in Computer
          Science with a focus on development and cybersecurity I am planning to
          complete an M.S. in Computer Science here at BU. In CS, my passions
          are software development, IT operations, GNU/Linux, and cybersecurity.
          I am currently aspiring to be a Software or DevOps Engineer.
        </p>
        <p className="mb-4 leading-relaxed">
          When I'm not programming, you'll find me spending time with friends,
          skateboarding around the city, reading a good book, or enjoying a nice
          cup of coffee (sometimes tea). Feel free to check out my social
          networking below and connect with me.
        </p>
      </div>
    </section>
  );
}
