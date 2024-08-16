import React from "react";
import img1 from "../assets/images/gallery-1.png"; // replace with your image paths
import img2 from "../assets/images/gallery-2.png";
import img3 from "../assets/images/gallery-3.png";
import img4 from "../assets/images/gallery-4.png";

const Gallery = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-blue-800 text-sm font-bold mb-4">GALLERY</h2>
        <h3 className="text-center text-4xl font-bold mb-12">Campus Photos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <img src={img1} alt="Gallery Image 1" className="w-full rounded-lg shadow-lg" />
          <img src={img2} alt="Gallery Image 2" className="w-full rounded-lg shadow-lg" />
          <img src={img3} alt="Gallery Image 3" className="w-full rounded-lg shadow-lg" />
          <img src={img4} alt="Gallery Image 4" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="text-center">
          <button className="bg-blue-800 text-white text-lg font-semibold rounded-full px-8 py-3 hover:bg-blue-900 transition duration-300">
            See more here  &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
