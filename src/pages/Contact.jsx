import React from "react";

function Contact() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white flex flex-col justify-center items-center px-8 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-6 transform transition duration-300 hover:scale-110">
          Contact Us
        </h1>
        <p className="max-w-3xl text-lg text-center mb-6 transform transition duration-300 hover:scale-105">
          We’re here to help! Whether you have questions about our services,
          feedback, or need assistance with your learning journey, our team is
          ready to provide support. Feel free to reach out through any of the
          methods below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
            <p className="text-sm mb-2">
              Send us an email, and we’ll get back to you within 24 hours.
            </p>
            <p className="mt-2 text-xl">contact@skillhub.com</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
            <p className="text-sm mb-2">
              Give us a call during business hours for immediate assistance.
            </p>
            <p className="mt-2 text-xl">+1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-pink-500 to-orange-500 text-white flex flex-col justify-center items-center px-8 transition-all duration-500">
        <h2 className="text-4xl font-semibold mb-4 transform transition duration-300 hover:scale-110">
          Follow Us on Social Media
        </h2>
        <p className="max-w-2xl text-center mb-4 text-lg">
          Stay up to date with the latest from SkillHub. Follow us on our social
          media channels to get updates on new courses, events, and community
          highlights.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition-all duration-200"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-400 px-6 py-3 rounded-full hover:bg-blue-500 transition-all duration-200"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-pink-600 px-6 py-3 rounded-full hover:bg-pink-500 transition-all duration-200"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-700 px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-teal-600 to-cyan-500 text-white flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-semibold mb-4">Contact Form</h2>
        <p className="max-w-2xl text-center mb-6 text-lg">
          Fill out the form below, and we’ll get back to you as soon as
          possible.
        </p>
        <form className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-800 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-gray-100 flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-semibold mb-6">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
            <p className="text-sm">123 Main Street, Suite 500</p>
            <p className="text-sm">New York, NY 10001</p>
            <p className="text-sm">United States</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">European Office</h3>
            <p className="text-sm">45 Kingsway, Suite 201</p>
            <p className="text-sm">London, WC2B 6LE</p>
            <p className="text-sm">United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
