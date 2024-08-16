import React, { useState } from 'react';
import userImg1 from "../assets/images/user-1.png";
import userImg2 from "../assets/images/user-2.png";
import userImg3 from "../assets/images/user-3.png";
import userImg4 from "../assets/images/user-4.png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      img: userImg1,
      name: "Aastha Sharma",
      location: "Kathmandu, Nepal",
      quote: "The faculty here at Patan Multiple Campus is extremely supportive and knowledgeable. The learning environment has truly helped me grow both academically and personally."
    },
    {
      img: userImg2,
      name: "Sujan Timalsina",
      location: "Kathmandu, Nepal",
      quote: "The facilities and resources available at this campus are top-notch. It's been an incredible journey of learning and self-discovery for me."
    },
    {
      img: userImg3,
      name: "Binu Shrestha",
      location: "Kathmandu, Nepal",
      quote: "I've had an amazing experience with the community here. The opportunities for growth and learning are endless."
    },
    {
      img: userImg4,
      name: "Rachana Joshi",
      location: "Kathmandu, Nepal",
      quote: "Being a student at Patan Multiple Campus has been a great experience. The faculty and the student body are both very welcoming and supportive."
    }
  ];


  return (
    <div className='testimonials my-[100px] mx-auto flex flex-col items-center justify-between w-[90%] relative'>      
      <div className="slider w-full overflow-hidden relative">
        <ul 
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <li key={index} className='w-[50%] p-[15px]'>
              <div className='slide bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-[350px]'>
                <img className="w-[80px] h-[80px] rounded-full" src={testimonial.img} alt={`User ${index + 1}`} />
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <span className="text-sm text-gray-500">{testimonial.location}</span>
                </div>
                <p className="mt-4 text-center text-gray-700">
                  {testimonial.quote}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className=" mt-3 bg-blue-800 text-white text-lg font-semibold rounded-full px-8 py-3 hover:bg-blue-900 transition duration-300">
            See more   &rarr;
          </button>
    </div>
  );
}

export default Testimonial;
