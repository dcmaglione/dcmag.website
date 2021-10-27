import React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="py-20">
        <div className="text-center mb-10">
          <div className="flex justify-center m-6">
            <h1 className="font-serif sm:text-4xl text-3xl font-medium title-font text-white mt-2">
              Skills
            </h1>
          </div>
          <p className="flex justify-center text-center leading-relaxed text-lg mb-10 md:w-2/3 mx-auto">
            Technological disciplines are often vast in this ever-changing
            world, and Computer Science is no exception. From front-end to
            back-end, design to deployment, generally every individual possesses
            a unique skill set. Here are some of my skills.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <DotsVerticalIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
