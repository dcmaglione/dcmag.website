import React from 'react';

import { AcademicCapIcon } from '@heroicons/react/solid';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 pt-20 pb-5 mx-auto text-left">
        <div className="flex justify-left m-6 ml-7">
          <AcademicCapIcon className="w-10 inline-block mr-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mt-2">
            Education
          </h1>
        </div>
        <p className="flex justify-left lg:w-2/3 ml-8 leading-relaxed text-base">
          A solid education is the foundation for a prosperous life. While it is
          crucial to put a great deal of effort into your field, there is value
          in becoming a well-rounded individual. Listed below are the
          institutions I have attended or am currently attending.
        </p>
        <div className="flex flex-wrap m-4">
          {education.map((education) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <img
                    alt="education"
                    src={education.image}
                    className="w-12 rounded-none flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-lg title-font font-medium text-white">
                      {education.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {education.year}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed mb-2">{education.degree}</p>
                <p className="leading-relaxed mb-4">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
