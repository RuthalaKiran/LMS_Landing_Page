import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsSticky(false); // Close the menu when toggling
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // At the top of the page, reset to non-sticky
        setIsSticky(false);
      } else {
        // When scrolling (either up or down), make it sticky
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 z-50 bg-[#FFF6EF] shadow-lg"
          : "relative"
      } px-4 sm:px-10 md:px-12 lg:px-24 py- flex flex-col md:flex-row md:items-center md:justify-between`}
    >
      {/* Logo and Hamburger (Mobile) */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="logo">
          <a href="/">
            <img className="w-12 md:w-20" src={logo} alt="Codeneksa Logo" />
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-[#2c2c54] focus:outline-none"
          onClick={toggleMenu}
        >
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
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center md:gap-10 mt-4 md:mt-0 w-full md:w-auto bg-[#FFF6EF] md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 w-full md:w-auto">
          <li>
            <a
              className="block text-center md:text-left text-[#2c2c54] hover:bg-orange-100 px-2 py-1 rounded-lg"
              href="#hero"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="block text-center md:text-left text-[#2c2c54] hover:bg-orange-100 px-2 py-1 rounded-lg"
              href="#courses"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              className="block text-center md:text-left text-[#2c2c54] hover:bg-orange-100 px-2 py-1 rounded-lg"
              href="#contact"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              className="block text-center md:text-left text-[#2c2c54] hover:bg-orange-100 px-2 py-1 rounded-lg"
              href="#about"
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>

      {/* LMS Login Button */}
      <button
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex border-[3px] border-blue-400 hover:outline outline-blue-700 duration-200 py-1 px-4 rounded-full mt-4 md:mt-0 w-full md:w-auto md:max-w-[150px] justify-center text-[#2c2c54]`}
      >
        LMS Login
      </button>
    </div>
  );
};

export default Navbar;