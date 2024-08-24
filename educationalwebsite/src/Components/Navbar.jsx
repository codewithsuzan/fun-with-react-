import React, { useEffect, useState, useCallback } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  // const [sticky, setSticky] = useState(false);

  // const handleScroll = useCallback(() => {
  //   setSticky(window.scrollY > 50);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full flex items-center justify-between z-20 px-4 transition duration-500 bg-blue-300 `}
      
    >
      <img className="w-[150px]" src={logo} alt="Logo" />
      <ul className="flex items-center space-x-6 cursor-pointer">
        {["home", "program", "about-us", "campus", "testimonials"].map((section, index) => (
          <li key={index}>
            <button
              onClick={() => scrollToSection(section)}
              className="hover:underline"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => scrollToSection('contact-us')}
            className="bg-black text-white rounded-[50px] px-[20px] py-[8px] text-sm font-semibold outline-none border-0 hover:bg-gray-200 transition"
          >
            Contact us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
