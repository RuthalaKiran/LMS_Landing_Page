import React from "react";
import { useInView } from "react-intersection-observer";
import datascience from "../assets/datascience.png";
import python from "../assets/python.png";
import cplus from "../assets/cplus.png";
import fullstack from "../assets/fullstack.png";
import ai from "../assets/ai.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import cloud from "../assets/cloud.png";
import cybersecurity from "../assets/cybersecurity.png";

const Categories = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const categories = [
    { id: 1, course: "Cloud Computing", img: cloud },
    { id: 2, course: "Full Stack", img: fullstack },
    { id: 3, course: "AI", img: ai },
    { id: 4, course: "Cyber Security", img: cybersecurity },
    { id: 5, course: "Python", img: python },
    { id: 6, course: "HTML CSS JS", img: html },
    { id: 7, course: "Java", img: java },
    { id: 8, course: "C++", img: cplus },
    { id: 9, course: "Data Science", img: datascience },
  ];

  return (
    <section
      ref={ref}
      className="mx-4 sm:mx-6 md:mx-12 lg:mx-24 py-8 sm:py-10 md:py-12"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center pb-6 sm:pb-8 md:pb-10 text-[#2c2c54]">
        Our Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
        {categories.map((item, index) => (
          <div
            key={item.id}
            className={`px-4 sm:px-6 md:px-5 lg:px-10 group hover:bg-[#2c2c54]   cursor-pointer bg-gray-200 flex items-center gap-3 sm:gap-4 md:gap-5 py-4 sm:py-5 md:py-7 rounded-md  duration-200  ${
              inView ? `animate-slide-in delay-${index * 100}` : "opacity-0"
            }`}
          >
            <img
              className="w-12 sm:w-14 md:w-16 object-cover"
              src={item.img}
              alt={item.course}
            />
            <p className="text-sm sm:text-base md:text-lg text-[#2c2c54] group-hover:text-white duration-200 ">
              {item.course}
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
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-in {
            animation: none;
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Categories;