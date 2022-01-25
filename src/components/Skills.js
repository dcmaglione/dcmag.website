import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="m-auto pt-36 pb-20 bg-gray-900 text-white">
      <h1 className="flex justify-center mb-10 font-sans sm:text-5xl text-4xl font-semibold title-font text-white">
        Skills
      </h1>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/4 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <GoPrimitiveDot className="text-red-500 w-6 h-6 mr-4" />
              <span className="title-font font-medium text-white">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
