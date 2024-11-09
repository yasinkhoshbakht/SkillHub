import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-gray-100 px-8 py-16 space-y-20">
      <div className="flex flex-col items-center text-center mb-16 space-y-6">
        <h1 className="text-6xl font-extrabold text-white tracking-wide leading-snug transform transition-transform duration-500 hover:scale-105">
          Welcome to SkillHub
        </h1>
        <p className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed transform transition-transform duration-300 hover:scale-105">
          Unlock a world of knowledge and connect with a community of passionate
          learners and experts. Level up your skills with transformative courses
          that help you reach new heights.
        </p>
        <button className="mt-8 bg-blue-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-2xl hover:bg-blue-500 hover:shadow-2xl transform transition-all duration-300 ease-in-out scale-105 hover:scale-110">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 space-y-6">
          <h2 className="text-4xl font-semibold text-white hover:text-blue-200 transform transition-all duration-200">
            Learn from Industry Experts
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed transform hover:scale-105 transition duration-300">
            Connect with professionals in your field. Our expert instructors
            offer personalized learning experiences to accelerate your growth
            and success.
          </p>
          <button className="text-blue-200 font-medium hover:underline hover:text-blue-400 transition duration-200">
            Learn More
          </button>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 space-y-6">
          <h2 className="text-4xl font-semibold text-white hover:text-blue-200 transform transition-all duration-200">
            Build Lasting Connections
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed transform hover:scale-105 transition duration-300">
            Engage with a global community of learners, exchange ideas,
            collaborate on projects, and build relationships that enhance both
            personal and professional growth.
          </p>
          <button className="text-blue-200 font-medium hover:underline hover:text-blue-400 transition duration-200">
            Join the Community
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 p-12 rounded-3xl shadow-xl text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-5xl font-extrabold text-white transform transition-transform duration-500 hover:scale-105">
          Ready to Transform Your Skills?
        </h3>
        <p className="text-xl text-gray-200 leading-relaxed">
          Get access to exclusive courses, personalized mentorship, and a
          vibrant learning community. Begin your journey toward professional
          growth and mastery today!
        </p>
        <button className="bg-blue-400 text-gray-900 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-500 hover:shadow-2xl transform transition-all duration-300 ease-in-out scale-105">
          Sign Up Now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-gradient-to-r from-blue-400 to-green-500 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 space-y-6">
          <h2 className="text-4xl font-semibold text-white hover:text-blue-200">
            Flexible Learning, Anytime
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed transform hover:scale-105 transition duration-300">
            Our platform offers flexible learning that fits your schedule, with
            on-demand access to courses. Learn at your own pace, wherever you
            are.
          </p>
          <button className="text-blue-200 font-medium hover:underline hover:text-blue-400 transition duration-200">
            Explore Courses
          </button>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 space-y-6">
          <h2 className="text-4xl font-semibold text-white hover:text-blue-200">
            Career Boosting Opportunities
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed transform hover:scale-105 transition duration-300">
            Get ahead in your career with skills that matter in today’s
            fast-paced job market. SkillHub connects you with the tools and
            resources to accelerate your career growth.
          </p>
          <button className="text-blue-200 font-medium hover:underline hover:text-blue-400 transition duration-200">
            Advance Your Career
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-400 to-indigo-600 text-gray-100 p-12 rounded-3xl shadow-xl max-w-4xl mx-auto text-center mt-12">
        <h3 className="text-4xl font-extrabold text-white mb-4">
          What Our Learners Say
        </h3>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
          "SkillHub is where I discovered my true potential. The community and
          the resources available have been pivotal in helping me move forward
          in my career."
        </p>
        <p className="text-blue-200 font-semibold">- Jamie, UX Designer</p>
      </div>
    </div>
  );
}

export default Home;
