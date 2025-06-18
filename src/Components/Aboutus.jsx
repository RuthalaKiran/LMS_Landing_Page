import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import aboutImg from "../assets/img18.jpg"; // Replace with your image

const Aboutus = () => {
  const imgRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const cursor = cursorRef.current;

    if (!img || !cursor) return;

    // Fade in animation
    gsap.from(img, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    // Mouse move effect
    const handleMouseMove = (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cursorX = Math.min(Math.max(x, 0), rect.width - 8);
      const cursorY = Math.min(Math.max(y, 0), rect.height - 8);

      gsap.to(cursor, {
        x: cursorX - 4, // center offset
        y: cursorY - 4,
        duration: 0.2,
        ease: "power2.out",
      });

      // Image tilt effect
      const maxMove = 20;
      const moveX = ((x - rect.width / 2) / (rect.width / 2)) * maxMove;
      const moveY = ((y - rect.height / 2) / (rect.height / 2)) * maxMove;

      gsap.to(img, {
        x: moveX * 0.5,
        y: moveY * 0.5,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const handleEnter = () => {
      cursor.style.display = "block";
      gsap.fromTo(
        cursor,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3 }
      );
    };

    const handleLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      setTimeout(() => {
        cursor.style.display = "none";
      }, 300);
      gsap.to(img, { x: 0, y: 0, duration: 0.3 });
    };

    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseenter", handleEnter);
    img.addEventListener("mouseleave", handleLeave);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseenter", handleEnter);
      img.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Text */}
        <div className="space-y-5">
          <h3 className="text-blue-600 font-semibold uppercase text-sm">
            About Us
          </h3>
          <h2 className="text-4xl font-bold text-[#2c2c54]">
            Learn and Grow Your Coding Skills with Codeneksa
          </h2>
          <p className="text-gray-600">
            Codeneksa is a premier online and offline coding learning
            institution dedicated to empowering individuals with the skills to
            excel in technology. Whether you're a beginner or an advanced
            learner, our expert instructors and comprehensive courses help you
            master programming and achieve your career goals.
          </p>
          <div className="flex gap-6">
            <div>
              <h4 className="text-2xl font-bold text-[#2c2c54]">5K+</h4>
              <p className="text-gray-600">Students</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#2c2c54]">50+</h4>
              <p className="text-gray-600">Courses</p>
            </div>
          </div>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Read More
          </a>
        </div>

        {/* Image + Custom Cursor */}
        <div className="relative w-full max-w-lg mx-auto">
          <img
            ref={imgRef}
            src={aboutImg}
            alt="About Codeneksa"
            className="w-full rounded-lg border-4 border-blue-600"
          />
          <div
            ref={cursorRef}
            className="absolute w-4 h-4 bg-blue-600 rounded-full pointer-events-none hidden"
            style={{ top: 0, left: 0, transform: "translate(0, 0)" }}
          />
          {/* Decorative SVG at top-left (filled blue circle) */}
          <svg
            className="absolute -top-4 -left-4 w-7 h-7 text-blue-600 opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
          {/* Decorative SVG at bottom-right (filled orange circle) */}
          <svg
            className="absolute -bottom-4 -right-4 w-8 h-8 text-orange-400 opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
