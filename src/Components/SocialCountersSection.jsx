import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { GrCertificate } from "react-icons/gr";
import { FaBriefcase } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const SocialCountersSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const counters = [
    {
      platform: "certificate gained students",
      count: 2500,
      icon: (
        <GrCertificate className="text-red-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      platform: "Placements",
      count: 200,
      icon: (
        <FaBriefcase className="text-pink-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      platform: "Enrolled Students",
      count: 2500,
      icon: (
        <FaUserCheck className="text-blue-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
  ];

  return (
    <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-28 py-6 sm:py-8 md:py-10">
      {/* Title Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative">
          Our Growing Community
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full "></span>
        </h1>
        
      </div>

      {/* Counters */}
      <div
        ref={ref}
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
      >
        {counters.map((item, index) => (
          <div
            key={index}
            className={`bg-white group cursor-pointer hover:bg-[#2c2c54] rounded-lg p-4 sm:p-5 md:p-6 shadow-md flex flex-col items-center text-center w-[100%] sm:w-64 md:w-72 lg:w-80  hover:shadow-lg transition-all duration-300 ${
              inView ? `animate-slide-in delay-${index * 100}` : "opacity-0"
            }`}
          >
            {item.icon}
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c2c54] hover:text-white mt-2 sm:mt-3 transition-colors duration-300">
              {inView ? (
                <CountUp
                  className="group-hover:text-white duration-300"
                  start={0}
                  end={item.count}
                  duration={2}
                />
              ) : (
                0
              )}
              <span className="text-xl sm:text-2xl md:text-3xl  group-hover:text-white transition-colors duration-300">
                +
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-white mt-1 sm:mt-2 transition-colors duration-300">
              {item.platform}
            </p>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slide-in {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        .delay-0 { animation-delay: 0ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-in {
            animation: none;
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialCountersSection;
