import React from 'react';
import { education } from '../components/data';

export default function Education() {
  return (
    <section
      id="education"
      className="m-auto pt-36 pb-48 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 -skew-y-12 shadow-inner text-white"
    >
      <div className="skew-y-12">
        <h1 className="flex justify-center mb-10 sm:text-5xl text-4xl font-sans font-semibold title-font text-white mt-2">
          Education
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mx-36 px-24">
          {education.map((education, index) => (
            <div key={index}>
              <div className="h-full bg-gray-600 bg-opacity-30 p-8 rounded">
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
                    <span className="text-gray-200 text-sm uppercase">
                      {education.year}
                    </span>
                  </span>
                </div>
                <p className="mb-2 text-gray-300">{education.degree}</p>
                <p className="text-gray-300">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
