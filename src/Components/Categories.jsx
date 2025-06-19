import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

// Assets
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

  const cardsRef = useRef([]);

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

  useEffect(() => {
    if (inView) {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.1,
          }
        );
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="mx-4 sm:mx-6 md:mx-12 lg:mx-24 py-12 sm:py-16 md:py-20 bg-gradient-to-br"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative">
        Our Courses Offered
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full"></span>
        {/* Left SVG - Star */}
        <svg
          className="animate-float-left-right absolute left-0 top-0 -translate-y-1/2 -translate-x-4 w-6 h-6 text-[#ff5733] opacity-70"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21 12 17.77 5.82 21 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        {/* Right SVG - Curve */}
        <svg
          className="animate-float-left-right absolute right-0 top-0 -translate-y-1/2 translate-x-4 w-6 h-6 text-[#ff5733] opacity-70"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {categories.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 cursor-pointer group"
          >
            <img
              className="w-16 h-16 object-contain transition-transform group-hover:scale-110 duration-300"
              src={item.img}
              alt={item.course}
            />
            <p className="text-lg sm:text-xl font-medium text-[#2c2c54] group-hover:text-white transition duration-300">
              {item.course}
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c2c54] to-[#ff5733] rounded-xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-[-1]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
