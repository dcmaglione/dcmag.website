import React from 'react';
import { socials } from '../data';

const style =
  'flex justify-center items-center mx-2 my-4 p-2 w-12 h-12 2xl:w-16 2xl:h-16 text-white hover:text-gray-400 cursor-pointer';

export default function Socials() {
  return (
    <div id="socials" className="w-4/5 md:w-2/4 lg:w-1/3 xl:w-1/4 mt-5">
      <div className="flex justify-evenly items-center">
        {socials.map((link, index) => {
          return (
            <a
              className={style}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
