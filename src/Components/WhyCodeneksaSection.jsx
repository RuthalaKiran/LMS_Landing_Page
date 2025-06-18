import React from "react";
import pencilguy from "../assets/pencilguy.svg";

const WhyCodeneksaSection = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-28 py-6 sm:py-8 md:py-10">
      {/* Title Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-[#ff5733] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Why Codeneksa?
        </h2>
        <h1 className="text-[#2c2c54] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Because Your Future Deserves 365 Days of Growth
        </h1>
      </div>

      {/* Main Content: Left Cards, Middle Box, Right Cards */}
      <div className="flex justify-center flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {/* Left Cards */}
        <div className="flex flex-col justify-between w-full md:w-80 lg:w-96 ">
          <div className="bg-white rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 shadow-md flex flex-col justify-center h-full">
            <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2">
              ✅ Cost Effective
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Affordable programs for every learner.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 shadow-md flex flex-col justify-center h-full">
            <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2">
              ✅ 365 Days Assistance
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Daily mentorship & learning support.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 shadow-md flex flex-col justify-center h-full">
            <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2">
              ✅ Projects
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Work on real-world industry-grade projects.
            </p>
          </div>
        </div>

        {/* Middle Box: Illustration and CTA */}
        <div className="bg-[#2c2c54] w-full  md:w-80 lg:w-96 rounded-2xl p-4 sm:p-5 md:p-6  text-white text-center">
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
        <div className="flex flex-col justify-between w-full md:w-80 lg:w-96">
          <div className="bg-white rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 shadow-md flex flex-col justify-center h-full">
            <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2">
              ✅ Workshops
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Hands-on sessions with experts.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 mb-4 sm:mb-5 shadow-md flex flex-col justify-center h-full">
            <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2">
              ✅ Seminars
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Weekly events to expand your knowledge.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 shadow-md flex flex-col justify-center h-full">
            <h3 className="text-[#2c2c54] text-base sm:text-lg font-semibold mb-2">
              ✅ 100% Placement Assistance
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Full support till you get placed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCodeneksaSection;