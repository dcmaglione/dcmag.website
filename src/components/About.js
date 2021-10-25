import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="flex pt-20 pb-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-serif font-medium text-white">
            Hi, I'm Dominic.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Sophomore at Boston University pursuing a B.A. in Computer
            Science with a focus on systems, development, and cybersecurity.
            Additionally, I am planning to complete an additional B.A. in
            Economics here at BU. In CS, my passions are software development,
            IT operations, GNU/Linux, and cybersecurity, focusing on management.
            I am currently aspiring to be a Software Engineer or Product
            Manager.
          </p>
          <p className="mb-8 leading-relaxed">
            When I'm not programming, you'll find me spending time with friends,
            skateboarding around the city, reading a good book, or enjoying a
            nice cup of coffee (sometimes tea). Feel free to check out my social
            networking below and connect with me.
          </p>
          <div className="flex flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/in/dcmaglione/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mr-4 mb-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dcmaglione/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg mr-4 mb-4"
            >
              GitHub
            </a>
            <a
              href="mailto:dcmaglione@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg mb-4"
            >
              Email
            </a>
          </div>
        </div>
        <div className="px-10 md:px-0 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:pl-8">
          <img
            className="object-cover object-center rounded-3xl"
            alt=" "
            src="./images/profile-pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}
