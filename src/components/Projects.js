import React from 'react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container pt-20 pb-20 mx-auto text-center">
        <div className="flex flex-col w-full">
          <div className="flex justify-center mb-4">
            <h1 className="font-serif sm:text-4xl text-3xl font-medium title-font text-white mt-2">
              Projects
            </h1>
          </div>
          <p className="flex justify-center text-center leading-relaxed text-lg mb-10 md:w-2/3 mx-auto">
            Trial and error is a fundamental process for nearly all aspects of
            Computer Science. The more I've experimented with different
            development tools, environments, libraries, distributions, the
            broader my skillset has become. Here are a few of my completed and
            ongoing projects.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="w-full">
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 rounded">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
