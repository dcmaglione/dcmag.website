import React from 'react';

import { CodeIcon } from '@heroicons/react/solid';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 pt-20 pb-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="flex justify-center m-6">
            <CodeIcon className="w-10 inline-block mr-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mt-2">
              Projects
            </h1>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Trial and error is a fundamental process for nearly all aspects of
            Computer Science. The more I've experimented with different
            development tools, environments, libraries, distributions, the
            broader my skillset has become. Here are a few of my completed and
            ongoing projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/3 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 rounded">
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
