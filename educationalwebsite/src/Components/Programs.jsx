import React from "react";
import graduateImage1 from "../assets/images/program-1.png";
import graduateImage2 from "../assets/images/program-2.png";
import graduateImage3 from "../assets/images/program-3.png";
import icon1 from "../assets/images/program-icon-1.png";
import icon2 from "../assets/images/program-icon-2.png";
import icon3 from "../assets/images/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs my-20 mx-auto w-[90%] bg-gray-100">
      <div className="text-center mb-12">
        <h3 className="text-blue-600 font-semibold uppercase">Our Program</h3>
        <h2 className="text-4xl font-bold">What We Offer</h2>
      </div>
      <div className="flex justify-center space-x-8">
        {/* Program Card 1 */}
        <div className="program-card bg-white p-6 rounded-lg shadow-lg">
          <div className="relative group overflow-hidden">
            <img
              className="rounded-lg w-full h-full object-cover group-hover:opacity-50"
              src={graduateImage1}
              alt="Graduation Program"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 rounded-lg group-hover:opacity-100"
              style={{
                backgroundColor: "rgba(0, 15, 152, 0.3)",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <img src={icon1} alt="Icon 1" className="w-12 h-12 mb-2" />
              <p className="text-white font-bold">Graduation Degree</p>
            </div>
          </div>
        </div>
        {/* Program Card 2 */}
        <div className="program-card bg-white p-6 rounded-lg shadow-lg">
          <div className="relative group">
            <img
              className="rounded-lg w-full h-full object-cover group-hover:opacity-50"
              src={graduateImage2}
              alt="Masters Degree"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 rounded-lg group-hover:opacity-100"
              style={{
                backgroundColor: "rgba(0, 15, 152, 0.3)",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <img src={icon2} alt="Icon 2" className="w-12 h-12 mb-2" />
              <p className="text-white font-bold">Masters Degree</p>
            </div>
          </div>
        </div>
        {/* Program Card 3 */}
        <div className="program-card bg-white p-6 rounded-lg shadow-lg">
          <div className="relative group">
            <img
              className="rounded-lg w-full h-full object-cover group-hover:opacity-50"
              src={graduateImage3}
              alt="Post Graduation"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 rounded-lg group-hover:opacity-100"
              style={{
                backgroundColor: "rgba(0, 15, 152, 0.3)",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <img src={icon3} alt="Icon 3" className="w-12 h-12 mb-2" />
              <p className="text-white font-bold">Post Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
