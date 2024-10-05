import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#2C3E50] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-white text-2xl font-bold">User Management</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 relative' : 'text-white'
            }
          >
            <li>
              HOME
              {/* Underline effect */}
              <span
                className={`block h-0.5 bg-blue-400 w-0 transition-all duration-300 absolute bottom-0 left-0`}
              />
            </li>
          </NavLink>
         
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
