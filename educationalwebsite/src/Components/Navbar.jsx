import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`px-4 fixed top-0 left-0 right-0 text-blue-400 w-full flex items-center justify-between z-20 transition duration-500 ${sticky ? 'bg-[#212ea0] text-white' : 'bg-transparent'}`}
    >
      <img className="w-[150px]" src={logo} alt="Logo" />
      <ul className="flex items-center space-x-6 cursor-pointer">
        <li>
          <button onClick={() => scrollToSection('home')} className="hover:underline">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('program')} className="hover:underline">
            Program
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about-us')} className="hover:underline">
            About us
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('campus')} className="hover:underline">
            Campus
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('testimonials')} className="hover:underline">
            Testimonials
          </button>
        </li>
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
