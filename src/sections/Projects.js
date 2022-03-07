import React from 'react';
import { projects } from '../components/data';

// import Card from '../containers/Card';

export default function Projects() {
  return (
    <section
      id="projects"
      className="m-auto pt-36 pb-48 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 -skew-y-12 shadow-inner text-white text-center"
    >
      <div className="skew-y-12">
        <h1 className="flex justify-center mb-10 font-sans sm:text-5xl text-4xl font-semibold title-font text-white">
          Projects
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-36">
          {projects.map((project) => (
            <a href={project.url} key={project.image} className="w-full">
              <div className="flex relative h-full cursor-pointer">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 rounded">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
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
