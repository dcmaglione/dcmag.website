import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      className="h-full flex align-center justify-center"
      style={{
        height: 'calc(100vh - 76px)',
      }}
    >
      <div className="flex flex-col flex-wrap m-auto justify-center items-center">
        <h1 className="font-sans font-bold text-center md:w-auto xl:text-8xl md:text-7xl text-6xl text-white pb-8">
          Dominic Maglione
        </h1>
        <h2 className="font-serif font-medium text-center md:w-auto xl:text-2xl md:text-xl text-lg text-gray-300 antialiased italic">
          Simplicity, carried to the extreme, becomes elegance.
        </h2>
      </div>
    </section>
  );
}
