import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false); // For dropdown

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleServices = () => setServicesOpen(!isServicesOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center md:py-6 md:px-10 bg-gradient-to-r from-[#d4d6e3] via-[#eaecf0] to-[#d4d6e3] font-[sfpro] fixed w-full z-50 px-4 py-3">
        <img src={logo} alt="logo" />

        {/* <div className="flex items-center space-x-2 md:space-x-6 border w-full"> */}
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:justify-between space-x-1 md:space-x-8 text-gray-700 text-[9px] md:text-sm font-medium relative">
          <li><a href="#">About Us</a></li>

          {/* Dropdown for Our Services */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="flex items-center space-x-1">
              <span>Our Services</span>
              <span>{isServicesOpen ? <ChevronUp /> : <ChevronDown />}</span>
            </span>

            {isServicesOpen && (
              <div className="absolute top-full bg-white shadow-lg rounded-lg w-48 p-2 z-50 flex flex-col justify-center items-center">
                <Link
                  to="https://crm.sartor.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Sartor  CRM
                </Link>
                <Link
                  to="https://crm.sartor.ng/sartor-chain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Sartor Chain
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Sartor LMS
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Business Consulting
                </Link>
              </div>
            )}
          </li>

          <li><a href="#">Blog</a></li>
        </ul>

        {/* Book Button */}
        <Link
          to="https://calendly.com/sartorlimited/1-on-1-free-30mins-introductory-consulting-call-official"
          className="bg-[#00A859] hover:bg-green-600 text-white px-6 py-2 rounded-xl font-medium text-[12px] lg:text-[14px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Consultation
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleMobileMenu}
            className="bg-[#00A859] p-1 rounded-md"
          >
            {isMobileMenuOpen ? (
              <IoClose className="text-white text-lg size-[25px]" />
            ) : (
              <HiOutlineMenu className="text-white text-lg size-[25px]" />
            )}
          </button>
        </div>
        {/* </div> */}
      </nav>

      {/* Mobile Slide-Out Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 right-0 bg-white shadow-lg z-40 w-full font-[sfpro] px-4 py-4">
          <ul className="flex flex-col space-y-4 text-gray-700 text-sm font-medium justify-center items-center">
            <li><a href="#">About Us</a></li>

            {/* Our Services Dropdown - Mobile */}
            <li>
              <button
                onClick={toggleServices}
                className={`flex w-full ${isServicesOpen ? "ml-8" : ""}`}
              >
                <span>Our Services</span>
                <span>{isServicesOpen ? <ChevronUp /> : <ChevronDown />}</span>
              </button>

              {isServicesOpen && (
                <ul className=" left-0 top-full bg-white shadow-lg rounded-lg  py-2 z-50 flex flex-col justify-center">
                  <li> <Link
                    to="https://crm.sartor.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Sartor  CRM
                  </Link></li>
                  <li> <Link
                    to="https://crm.sartor.ng/sartor-chain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Sartor Chain
                  </Link></li>
                  <li> <Link
                    to=""
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Sartor LMS
                  </Link></li>
                  <li> <Link
                    to=""
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Business Consulting
                  </Link></li>
                </ul>
              )}
            </li>

            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
