import React from 'react';

function Advantages() {
  return (
    <section className="py-20 px-4 bg-gray-50 mt-10">
      <h2 className="text-3xl font-bold text-primary text-center">Why Choose Our Tennis Lessons?</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4">
          <h3 className="text-xl font-semibold text-primary">Personalized Coaching</h3>
          <p className="mt-2">Our lessons are tailored to each couple’s unique needs, ensuring progress at a comfortable pace.</p>
        </div>
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4">
          <h3 className="text-xl font-semibold text-primary">Flexible Schedules</h3>
          <p className="mt-2">We offer flexible class schedules to fit your busy life, making tennis accessible for everyone.</p>
        </div>
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4">
          <h3 className="text-xl font-semibold text-primary">Certified Instructors</h3>
          <p className="mt-2">Our coaches are experienced and certified, offering top-notch guidance and feedback.</p>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
