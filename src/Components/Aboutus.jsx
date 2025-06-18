import React from "react";
import aboutImg from "../assets/img1.jpg"; // Placeholder image

const Aboutus = () => {
  return (
    <section id="about" className="bg-[#FFF6EF] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-blue-600 text-sm sm:text-base uppercase font-semibold tracking-wider">
              About Us
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c2c54]">
              Learn and Grow Your Coding Skills with Codeneksa
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Codeneksa is a premier online and offline coding learning institution dedicated to empowering individuals with the skills to excel in technology. Whether you're a beginner or an advanced learner, our expert instructors and comprehensive courses help you master programming and achieve your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.5c3.5 0 6.5 2.5 6.5 6s-3 6-6.5 6-6.5-2.5-6.5-6 3-6 6.5-6zm0 0c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5-2.5-1-2.5-2.5 1-2.5 2.5-2.5z"
                  />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-[#2c2c54]">5K+</h4>
                  <p className="text-gray-600">Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-[#2c2c54]">50+</h4>
                  <p className="text-gray-600">Courses</p>
                </div>
              </div>
            </div>
            <a
              href="#about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Read More
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Students learning coding at Codeneksa"
              className="w-full h-auto rounded-lg shadow-md"
            />
            {/* Decorative Elements (Optional, mimicking Youdemi) */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;