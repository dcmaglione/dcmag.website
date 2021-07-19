import React from 'react';

import { BriefcaseIcon } from '@heroicons/react/solid';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 pt-20 pb-5 mx-auto text-left">
        <div className="flex justify-left m-6 ml-7">
          <BriefcaseIcon className="w-10 inline-block mr-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mt-2">
            Experience
          </h1>
        </div>
        <p className="flex justify-left lg:w-2/3 ml-8 leading-relaxed text-base">
          In the past few years, I've had the pleasure of working and growing
          with exceptional people from very different backgrounds. Together, we
          expanded our skillsets and solved many challenges. Here are a few of
          my favorite and experiences with them.
        </p>
        <div className="flex flex-wrap m-4">
          {experience.map((experience) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <img
                    alt="experience"
                    src={experience.image}
                    className="w-12 rounded-lg flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-lg title-font font-medium text-white">
                      {experience.position}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {experience.company}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed mb-6">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
