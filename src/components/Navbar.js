import React from 'react';
import Menu from '../containers/Menu';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 sticky absolute top-0 z-10 shadow-lg font-mono text-xl text-gray-400 font-bold border-b-4 border-transparent">
      <div className="bg-gray-900">
        <Menu />
      </div>
    </header>
  );
}
