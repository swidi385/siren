import React from 'react';

function Testimonial() {
  return (
    <section className="py-20 px-4 bg-primary text-white mt-10">
      <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="max-w-sm bg-white text-gray-800 shadow-lg rounded-lg p-6 m-4">
          <p className="italic">"Siren Tennis Lessons transformed our game! The coaches were so patient and knowledgeable."</p>
          <p className="mt-4 font-semibold text-primary">- John & Emily</p>
        </div>
        <div className="max-w-sm bg-white text-gray-800 shadow-lg rounded-lg p-6 m-4">
          <p className="italic">"The personalized approach made learning so much fun. We look forward to every session!"</p>
          <p className="mt-4 font-semibold text-primary">- Sarah & Mike</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
