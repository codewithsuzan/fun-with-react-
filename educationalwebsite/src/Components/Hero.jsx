import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div
      className="hero w-full min-h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 1, 58, 0.6), rgba(8, 0, 58, 0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div
        className="hero-text px-4 text-white w-full flex flex-col items-center justify-center text-center max-w-[800px] z-10"
      >
        <h1 className="text-[60px] leading-[50px] font-semibold mb-4">We Ensure better education for a better world</h1>
        <p className="text-lg
        max-w-[700px] m-[10px] my-[20px] mx-auto

        mb-6">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="bg-white  text-[#212121] rounded-[50px] px-[20px] py-[8px] text-sm font-semibold outline-none border-0 hover:bg-gray-200 transition">
          Explore more &rarr;
        </button>
      </div>
    </div>
  );
};

export default Hero;
