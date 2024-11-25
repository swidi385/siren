import React from 'react';

function InformationPage() {
  return (
    <section className="py-20 px-4">
      {/* About Us Section with Side Images */}
      <section className="flex flex-wrap items-center justify-center mb-20">
        <img src="./src/assets/about.jpg" alt="Tennis Lesson" className="w-1/4 rounded-lg shadow-lg m-4" />
        
        <div className="max-w-2xl mx-auto text-center m-4">
          <h2 className="text-3xl font-bold text-primary">About Our Tennis Lessons</h2>
          <p className="mt-6 text-lg">
            Siren offers high-quality tennis lessons designed for couples who are new to tennis. Our experienced instructors provide a balanced approach that combines accuracy, patience, and enjoyment, helping each couple find their rhythm and improve together.
          </p>
        </div>

      </section>

      {/* Our Coach Section */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold text-center text-primary">Meet Our Coaches</h3>
        <div className="flex flex-wrap justify-center mt-10">
          {/* Coach 1 */}
          <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4 text-center">
            <img src="./src/assets/coach1.jpg" alt="Coach Alex Johnson" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-semibold">Coach Alex Johnson</h4>
            <p className="mt-2">
              With over 15 years of coaching experience, Alex specializes in teaching beginner couples. Known for his patience and precision, he has helped numerous couples start their tennis journey.
            </p>
          </div>

          {/* Coach 2 */}
          <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4 text-center">
            <img src="./src/assets/coach2.jpg" alt="Coach Linda Martinez" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-semibold">Coach Linda Martinez</h4>
            <p className="mt-2">
              Linda has a decade of experience in tennis coaching with a focus on foundational techniques. Her motivational style ensures that every session is productive and enjoyable for beginners.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold text-center text-primary">Our Awards</h3>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4 text-center">
            <h4 className="text-xl font-semibold">Best Tennis Academy - 2023</h4>
            <p className="mt-2">Awarded by the National Tennis Federation for our outstanding beginner programs.</p>
          </div>
          <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4 text-center">
            <h4 className="text-xl font-semibold">Excellence in Coaching - 2022</h4>
            <p className="mt-2">Recognized for our commitment to high-quality coaching and customer satisfaction.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default InformationPage;
