import React from 'react';
import { projects } from '../data';

export default function Card() {
  return (
    <section id="card" className="relative flex w-1/4 h-[500px] mx-auto mt-10">
      {projects.map((project, index) => (
        <div key={index}>
          <div className=" rounded-xl w-full bg-gradient-to-r p-[5px] from-pink-500 via-red-500 to-yellow-500">
            <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
              <div className="flex flex-col justify-center text-white">
                <img
                  className="h-52 mb-5 rounded-lg"
                  src={project.image}
                  alt="gallery"
                />
                <h1 className="text-3xl font-extrabold mb-4">
                  {project.title}
                </h1>
                <p className="text-lg md:text-lg font-medium mb-6  ">
                  {project.subtitle}
                </p>
              </div>
              <div className=" flex w-full justify-between mb-4">
                <span>
                  <img
                    className="w-[75px] h-[80px] rounded-full"
                    src=" "
                    alt=" "
                  />
                </span>
                <p className="text-lg mr-5 font-semibold text-white flex items-center justify-center">
                  16 Nov, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
