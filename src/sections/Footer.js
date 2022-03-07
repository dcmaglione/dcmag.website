import React from 'react';

export default function Footer() {
  return (
    <div className="border-t-4 border-transparent flex flex-col flex-wrap justify-center items-center m-auto">
      <div className="font-sans font-bold text-center md:w-auto text-3xl text-gray-200 mb-4">
        Contributing / Use of Code
      </div>
      <div className="font-sans text-center md:w-auto text-xl text-gray-200 mb-24 mx-40 px-40">
        <a
          href="https://dcmaglione.com/"
          className="text-red-500 hover:text-red-800 font-mono"
        >
          dcmaglione.com
        </a>{' '}
        is an open-source project. Feel free to use the{' '}
        <a
          href="https://github.com/dcmaglione/dcmag.website"
          className="text-red-500 hover:text-red-800 font-mono"
        >
          source code
        </a>{' '}
        as you wish under the{' '}
        <a
          href="https://choosealicense.com/licenses/mit/"
          className="text-red-500 hover:text-red-800 font-mono"
        >
          MIT License
        </a>
        .
      </div>
    </div>
  );
}
