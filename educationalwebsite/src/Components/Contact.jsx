import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key
const PUBLIC_KEY = 'tNNaggcbc-F8WLu0d';
emailjs.init(PUBLIC_KEY);

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isHuman, setIsHuman] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isHuman) {
      alert('Please confirm you are human.');
      return;
    }

    const templateParams = {
      from_name: name,
      to_name: 'Sujan Timalsina',  // The recipient's name
      phone,
      email,
      message,
    };

    emailjs.send('service_u3umc89', 'template_nbv4ohg', templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Thank you! Your message has been sent.');
        // Clear the form
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setIsHuman(false);
      }, (error) => {
        console.log('Failed to send the email.', error);
        alert('Failed to send the email. Please try again later.');
      });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-4">Send us a message</h3>
          <p className="mb-8">
            Feel free to reach out through the contact form below, or find our contact information. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-2" />
              <a href="mailto:iamcoderandtester@gamil.com" className="hover:underline">
                iamcoderandtester@gamil.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <a href="tel:+11234567890" className="hover:underline">
                +977 0145638292
              </a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <address className="hover:underline">
                Kathmandu,Nepal
              </address>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Write your message here
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="human"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={isHuman}
                onChange={() => setIsHuman(!isHuman)}
              />
              <label htmlFor="human" className="ml-2 text-sm text-gray-700">
                I am human
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
      <div>
        <hr />
        {/* copyright  */}
        &#169; 2024 industry Copyright claim:codewithsuzan||Sujan Timalsina.All right reserved.

      </div>
    </div>
  );
}

export default ContactForm;
