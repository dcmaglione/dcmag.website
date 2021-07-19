import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20 pb-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Dominic.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a rising Sophomore at Boston University pursuing a B.A. in
            Computer Science with a concentration in systems and development.
            Currently, I am planning to an accelerated Master's in Computer
            Science here at BU. In CS, my passions are software development, IT
            operations, GNU/Linux, and open-source software. I am currently
            aspiring to be a Cloud Engineer or UNIX System Administrator and
            seeking an internship for Summer '22.
          </p>
          <p className="mb-8 leading-relaxed">
            When I'm not programming, you'll find me spending time with friends,
            skateboarding around the city, reading a good book, or enjoying a
            nice cup of coffee (sometimes tea). Feel free to check out my social
            networking below.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/dominicmaglione/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dcmaglione"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="p-10 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./images/profile-pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}
