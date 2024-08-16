import React from "react";
import aboutImg from "../assets/images/about.png";
import playIcon from "../assets/images/play-icon.png";
import video from "../assets/images/video.mp4"

const About = () => {
  return (
    <div className="about my-[100px] mx-auto flex items-center justify-between w-[90%] ">
      <div className="about-left basis-[40%] relative">
        <a
          href={video}
          rel="noopener noreferrer"
        >
          <img className="aboutImg w-full rounded-lg " src={aboutImg} alt="About University" />
          <img className="playIcon w-[60px] absolute top-2/4 left-2/4  -translate-x-1/2 -translate-y-1/2" src={playIcon} alt="Play Video" />
        </a>
      </div>
      <div className="about-right basis-[56%]">
        <h3 className="uppercase font-semibold text-xl text-[#212ea0]">About University</h3>
        <h2 className="font-bold text-[35px] my-2.5 mx-0 max-w-[400px]">Nurturing Tomorrow's Leaders Today</h2>
        <p className=" text-[#676767] mb-4">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p className=" text-[#676767] mb-4">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p className=" text-[#676767] mb-4">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  );
};

export default About;
