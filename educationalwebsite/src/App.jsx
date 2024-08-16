import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programs from "./Components/Programs";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Testimonial from "./Components/Testimonial";
import ContactForm from "./Components/Contact";
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="pt-16">
        <Hero />
      </div>
      <div id="program" className="pt-16">
        <Programs />
      </div>
      <div id="about-us" className="pt-16">
        <About />
      </div>
      <div id="campus" className="pt-16">
       <Gallery />
      </div>
      <div id="testimonials" className="pt-16">
        <Testimonial />
      </div>
      <div id="contact-us" className="pt-16">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;