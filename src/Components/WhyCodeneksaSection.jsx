import React from "react";
import pencilguy from "../assets/pencilguy.svg";
import cost from "../assets/cost.png";
import days from "../assets/365days.png";
import projects from "../assets/project.png";
import workshops from "../assets/webinars.png";
import seminars from "../assets/seminars.png";
import placement from "../assets/100placement.png";

const WhyCodeneksaSection = () => {
  return (
    <div className=" mx-4 sm:mx-6 md:mx-3 lg:mx-12 xl:mx-20 py-6 sm:py-8 md:py-10">
      {/* Title Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-[#ff5733] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Why Codeneksa?
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative">
          Because Your Future Deserves 365 Days of Growth
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full"></span>
        </h1>
      </div>

      {/* Main Content: Left Cards, Middle Box, Right Cards */}
      <div className=" flex justify-center flex-col md:flex-row gap-4 sm:gap-6 md:gap-4 lg:gap-10">
        {/* Left Cards */}
        <div className="flex flex-col justify-between w-full md:w-80 lg:w-full">
          <div className="bg-white hover:shadow-lg rounded-lg p-4 sm:p-5  mb-4 sm:mb-5 shadow-md flex flex-col justify-center items-start h-full">
            <div className="flex items-center gap-5">
              {" "}
              <img
                src={cost}
                alt="Cost Effective"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-14 mb-2 object-contain"
              />
              <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2 text-center">
                Cost Effective
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              Affordable programs for every learner.
            </p>
          </div>
          <div className="bg-white hover:shadow-lg rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 shadow-md flex flex-col justify-center items-start h-full">
            <div className="flex items-center gap-5">
              <img
                src={days}
                alt="365 Days Assistance"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-14 mb-2 object-contain"
              />
              <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2 text-center">
                365 Days Assistance
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              Daily mentorship & learning support.
            </p>
          </div>
          <div className="bg-white hover:shadow-lg rounded-lg p-4 sm:p-5 shadow-md flex flex-col justify-center items-start h-full">
            <div className="flex items-center gap-5">
              <img
                src={projects}
                alt="Projects"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-14 mb-2 object-contain"
              />
              <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2 text-center">
                Projects
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              Work on real-world industry-grade projects.
            </p>
          </div>
        </div>

        {/* Middle Box: Illustration and CTA */}
        <div className="bg-[#2c2c54] w-full md:w-80 lg:w-full rounded-2xl p-4 sm:p-5 md:p-6 text-white text-center">
          <div className="h-48 sm:h-56 md:h-64 lg:h-80 flex justify-center items-center mb-3 sm:mb-4">
            <img
              src={pencilguy}
              alt="Codeneksa illustration"
              className="w-32 sm:w-36 md:w-40 lg:w-48 h-auto object-contain"
            />
          </div>
          <p className="text-sm sm:text-base mb-3 sm:mb-4">
            Want to kickstart your growth journey?
          </p>
          <button className="bg-white text-[#2c2c54] border-none py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition">
            Start Your Journey
          </button>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col justify-between w-full md:w-80 lg:w-full">
          <div className="bg-white hover:shadow-lg rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 shadow-md flex flex-col justify-center items-start h-full">
            <div className="flex gap-5 items-center">
              <img
                src={workshops}
                alt="Workshops"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 object-contain"
              />
              <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2 text-center">
                Workshops
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              Hands-on sessions with experts.
            </p>
          </div>
          <div className="bg-white hover:shadow-lg rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 shadow-md flex flex-col justify-center items-start h-full">
            <div className="flex gap-5 items-center">
              <img
                src={seminars}
                alt="Seminars"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 object-contain"
              />
              <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2 text-center">
                Seminars
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              Weekly events to expand your knowledge.
            </p>
          </div>
          <div className="bg-white hover:shadow-lg rounded-lg p-4 sm:p-5 shadow-md flex flex-col justify-center items-start h-full">
            <div className="flex gap-5 items-center">
              <img
                src={placement}
                alt="100% Placement Assistance"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 object-contain"
              />
              <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2 text-center">
                100% Placement Assistance
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              Full support till you get placed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCodeneksaSection;
