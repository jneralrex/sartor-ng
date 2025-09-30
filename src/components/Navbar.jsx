import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5'; 

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center md:py-6 md:px-10 bg-gradient-to-r from-[#d4d6e3] via-[#eaecf0] to-[#d4d6e3] font-[sfpro] fixed w-full z-50 px-4 py-3 max-w-[1444px]">
        <img src={logo} alt="logo" />

        <div className="flex items-center space-x-2 md:space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1 md:space-x-8 text-gray-700 text-[9px] md:text-sm font-medium">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services ▾</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          {/* Book Button */}
          <Link
            to="https://calendly.com/sartorlimited/1-on-1-free-30mins-introductory-consulting-call-official"
            className="bg-[#00A859] hover:bg-green-600 text-white  px-6 py-2 rounded-xl font-medium text-[12px] lg:text-[14px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation
          </Link>
            
            <div className="flex md:hidden items-center space-x-2">

          <button
            onClick={toggleMobileMenu}
            className="bg-[#00A859] p-1 rounded-md"
          >
            {isMobileMenuOpen ? (
              <IoClose className="text-white text-lg size-[25px] " />
            ) : (
              <HiOutlineMenu className="text-white text-lg size-[25px] " />
            )}
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu */}
        {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 right-0 bg-white shadow-lg z-40 w-full font-[sfpro] px-4 py-4">
          <ul className="flex flex-col space-y-4 text-gray-700 text-sm font-medium">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services ▾</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

