import React from 'react';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education">
      <div className="pt-20 pb-20 mx-auto text-left">
        <div className="flex justify-center mb-4">
          <h1 className="sm:text-4xl text-3xl font-serif font-medium title-font text-white mt-2">
            Education
          </h1>
        </div>
        <p className="flex justify-center text-center leading-relaxed text-lg mb-10 md:w-2/3 mx-auto">
          A solid education is the foundation for a prosperous life. While it is
          crucial to put a great deal of effort into your field, there is value
          in becoming a well-rounded individual. Listed below are the
          institutions I have attended or am currently attending.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {education.map((education, index) => (
            <div key={index}>
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