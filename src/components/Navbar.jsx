import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <span className="text-3xl font-bold text-blue-500">MyWebsite</span>
          </Link>
        </div>

      
        <nav className="hidden md:flex space-x-8">
          <Link href="/">
            <span className="hover:text-blue-400">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-blue-400">About</span>
          </Link>
          <Link href="/services">
            <span className="hover:text-blue-400">Services</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-blue-400">Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden">
        <nav className="bg-gray-700 text-white space-y-4 px-4 py-4">
          <Link href="/">
            <span className="block hover:text-blue-400">Home</span>
          </Link>
          <Link href="/about">
            <span className="block hover:text-blue-400">About</span>
          </Link>
          <Link href="/services">
            <span className="block hover:text-blue-400">Services</span>
          </Link>
          <Link href="/contact">
            <span className="block hover:text-blue-400">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
