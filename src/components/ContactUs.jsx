import React from 'react';

function ContactUs() {
  return (
    <section className="py-20 px-4 bg-yellow-100">
      <h2 className="text-3xl font-bold text-center text-primary">Contact Us</h2>
      <p className="mt-4 text-center max-w-xl mx-auto">
        Have questions? Ready to start your tennis journey? Reach out to us!
      </p>
      <form className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
            type="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
            id="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
