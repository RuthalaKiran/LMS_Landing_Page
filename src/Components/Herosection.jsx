import React, { useState, useEffect } from "react";
import headerpic from "../assets/header-pic.png";

const Herosection = () => {
  const words = [
    "consistently",
    "effectively",
    "confidently",
    "affordably",
    "at your pace",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mb-5 overflow-hidden">
      <div className="px-4 sm:px-10 md:px-12 lg:px-24 w-full flex flex-col md:flex-row items-center py-2 sm:py-12 md:py-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 mt-6 sm:mt-8 md:mt-10 flex flex-col md:gap-20">
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-[#2c2c54]">
            Master in-demand skills to learn{" "}
            <span className="relative inline-block w-[170px] sm:w-[180px] md:w-[235px] h-[30px] sm:h-[35px] md:h-[40px] overflow-hidden align-middle">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`absolute left-0 right-0 text-center mx-auto transition-opacity duration-500 whitespace-nowrap ${
                    index === currentIndex
                      ? "opacity-100 animate-slide-up"
                      : "opacity-0"
                  } text-orange-500 font-bold`}
                >
                  {word}
                </span>
              ))}
            </span>{" "}
            with 365 days of real world learning.
          </p>
          <div>
            {" "}
            <button className="bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-orange-600 transition text-sm sm:text-base">
              Join for free
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 sm:mt-8 md:mt-0">
          <img
            className="w-[80%] sm:w-[70%] md:w-[85%] max-w-xs sm:max-w-sm md:max-w-md"
            src={headerpic}
            alt="Hero"
          />
        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes slide-up {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Herosection;
