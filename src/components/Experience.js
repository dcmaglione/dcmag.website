import React from 'react';

import { BriefcaseIcon } from '@heroicons/react/solid';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="pt-20 pb-5 text-left">
        <div className="flex justify-center mb-4">
          <BriefcaseIcon className="w-10 inline-block mr-6" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mt-2">
            Experience
          </h1>
        </div>
        <p className="flex justify-center text-center leading-relaxed text-lg mb-10 md:w-2/3 mx-auto">
          In the past few years, I've had the pleasure of working and growing
          with exceptional people from very different backgrounds. Together, we
          expanded our skillsets and solved many challenges. Here are a few of
          my favorite and experiences with them.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {experience.map((experience) => (
            <div>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <img
                    alt="experience"
                    src={experience.image}
                    className="w-12 rounded-none flex-shrink-0 object-cover object-center"
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
                <p className="leading-relaxed mb-4">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
