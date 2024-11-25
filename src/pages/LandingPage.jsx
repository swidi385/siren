import React from 'react';
import Testimonial from '../components/Testimonial';
import Advantages from '../components/Advantages';
import ContactUs from '../components/ContactUs';

function LandingPage() {
  return (
    <section className="relative text-center py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(./src/assets/Hero-Bg.jpg)' }}>
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">Welcome to Siren Tennis Lessons</h1>
        <p className="mt-4 text-lg">Elegant and precise tennis lessons for beginners.</p>
        <a href="tel:+1234567890" className="mt-8 inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg">
          Call Us Now
        </a>
      </div>

      {/* Advantages and Testimonials */}
      <Advantages />
      <Testimonial />
      <ContactUs />
    </section>
  );
}

export default LandingPage;
