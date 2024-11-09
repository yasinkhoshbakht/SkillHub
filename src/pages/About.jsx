import React from "react";

function About() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white flex flex-col justify-center items-center px-8 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-6 transform transition duration-300 hover:scale-110">
          About Our Mission
        </h1>
        <p className="max-w-2xl text-lg text-center mb-6 transform transition duration-300 hover:scale-105">
          At SkillHub, we aim to empower individuals with knowledge and skills
          that can shape their future. We believe that learning is a lifelong
          journey and offer a platform to make learning accessible, engaging,
          and practical. Join us as we bring a variety of topics, expert
          insights, and hands-on tutorials.
        </p>
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">Core Values</h3>
          <ul className="text-lg space-y-2">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Inclusivity</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex flex-col justify-center items-center px-8 transition-all duration-500">
        <h2 className="text-4xl font-semibold mb-6 transform transition duration-300 hover:scale-110">
          Our Story
        </h2>
        <p className="max-w-2xl text-lg text-center mb-6">
          Founded in 2024, SkillHub was created by a group of passionate
          individuals who saw the need for a unique, comprehensive platform
          dedicated to learning and skill development. With backgrounds in
          education, technology, and design, our founders brought together their
          skills to build a space where anyone can access quality resources and
          expert guidance.
        </p>
        <div className="mt-6 text-center">
          <img
            src="/src/assets/wolf.png"
            alt="Our Founder"
            className="w-40 h-40 rounded-full mb-2 shadow-lg transform hover:scale-105 transition-all duration-300"
          />
          <p className="italic text-sm">Our Founder, Alex Johnson</p>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex flex-col justify-center items-center px-8">
        <h3 className="text-3xl font-semibold mb-6">Meet the Team</h3>
        <p className="max-w-2xl text-lg text-center mb-6">
          Our team consists of skilled professionals across various fields,
          including developers, designers, educators, and content creators.
          Together, we strive to make SkillHub a valuable resource for anyone
          eager to learn. We are proud to work with experts and community
          leaders who share our commitment to accessible, impactful education.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/user3.jpg"
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mb-2 shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <p className="text-lg font-semibold">John Doe - Developer</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/user1.jpg"
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mb-2 shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <p className="text-lg font-semibold">Jane Smith - Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/user2.jpg"
              alt="Team Member 3"
              className="w-24 h-24 rounded-full mb-2 shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <p className="text-lg font-semibold">
              Emily Johnson - Content Creator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
