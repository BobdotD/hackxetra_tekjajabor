import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center bg-blue-900 p-4 text-white">
    <div className="text-lg font-bold">
      <Link to="/">Alumni Connect</Link>
    </div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/stories" className="hover:text-gray-300">Stories</Link>
      <Link to="/events" className="hover:text-gray-300">Events</Link>
      <Link to="/login" className="hover:text-gray-300">Login</Link>
    </div>
  </nav>
);

export default Navbar;
