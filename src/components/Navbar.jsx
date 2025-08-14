import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center md:py-6 md:px-10 bg-[#EAECF0] shadow-md font-[sfpro] fixed w-full z-50 px-4 py-3">
        <img src={logo} alt="logo" />

        <div className="flex items-center space-x-2 md:space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1 md:space-x-8 text-gray-700 text-[9px] md:text-sm font-medium">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services ▾</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>

          {/* Book Button */}
          <Link
            to="https://calendly.com/sartorlimited/1-on-1-free-30mins-introductory-consulting-call-official"
            className="bg-[#00D743] text-blue-700 px-1 py-1 md:px-5 md:py-2 rounded-md text-[9px] md:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="logo" className="h-8" />
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4 text-gray-700 text-sm font-medium">
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Our Services ▾</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Help Center</a></li>
        </ul>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
