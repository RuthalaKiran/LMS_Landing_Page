import React, { useEffect } from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
// css
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
// import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-thumbnail.css";

// plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
// import lgShare from "lightgallery/plugins/Share";
import lgRotate from "lightgallery/plugins/rotate";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import fjGallery from "flickr-justified-gallery";

// Placeholder imports - replace with your actual image imports
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";

const Lightgallery = () => {
  useEffect(() => {
    fjGallery(document.querySelectorAll(".gallery"), {
      itemSelector: ".gallery__item",
      rowHeight: 180,
      lastRow: "start",
      gutter: 2,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });
  }, []);

  const gallery = [
    {
      id: 1,
      img: img1,
      alt: "Instructor explaining coding concepts on a whiteboard",
    },
    {
      id: 2,
      img: img2,
      alt: "Students collaborating on a coding project in a classroom",
    },
    {
      id: 3,
      img: img3,
      alt: "Online coding workshop with participants on a video call",
    },
    {
      id: 4,
      img: img4,
      alt: "Student debugging code on a laptop during a session",
    },
    {
      id: 5,
      img: img5,
      alt: "Group of students celebrating after solving a coding challenge",
    },
    {
      id: 6,
      img: img6,
      alt: "Close-up of a laptop screen displaying Python code",
    },
    {
      id: 7,
      img: img7,
      alt: "Instructor guiding a student through a JavaScript tutorial",
    },
    {
      id: 8,
      img: img8,
      alt: "Coding bootcamp setup with multiple computer stations",
    },
    {
      id: 9,
      img: img9,
      alt: "Student presenting a web development project to the class",
    },
    { id: 10, img: img10, alt: "Hands-on workshop on building a mobile app" },
    {
      id: 11,
      img: img11,
      alt: "Students attending a lecture on data structures",
    },
    {
      id: 12,
      img: img12,
      alt: "Evening coding session with students working on laptops",
    },
    {
      id: 13,
      img: img13,
      alt: "Close-up of a student writing algorithms on a notebook",
    },
    {
      id: 14,
      img: img14,
      alt: "Instructor demonstrating Git version control in a class",
    },
    {
      id: 15,
      img: img15,
      alt: "Students designing a website during a UI/UX workshop",
    },
    {
      id: 16,
      img: img16,
      alt: "Online learner coding a game in a virtual classroom",
    },
    {
      id: 17,
      img: img17,
      alt: "Team working on a hackathon project at Codeneksa",
    },
    {
      id: 18,
      img: img18,
      alt: "Graduation ceremony for Codeneksa’s coding course students",
    },
  ];

  return (
    <div className="overflow-hidden pt-0 pb-5 sm:py-10">
      <div className="pb-10 relative">
        {/* Top-left SVG */}
        {/* <svg
          className="animate-float-left-right absolute -top-10 left-20 w-10 h-10 text-blue-500 opacity-50 rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12" />
        </svg> */}

        {/* Top-right Star SVG */}
        <svg
          className="animate-float-left-right absolute -top-10 right-20 w-8 h-8 text-yellow-400 opacity-80 animate-pulse"
          fill="currentColor"
          viewBox="0 0 30 30"
        >
          <path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7L12 18l-6.2 3.2L7 14.2 2 9.3l7.1-0.7L12 2z" />
        </svg>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative z-10">
          Gallery of Growth
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full"></span>
        </h1>

        {/* Bottom-right Dots SVG */}
        {/* <svg
          className="absolute bottom-0 right-8 w-12 h-6 text-gray-300"
          fill="currentColor"
          viewBox="0 0 120 20"
        >
          <circle cx="10" cy="10" r="4" />
          <circle cx="40" cy="10" r="4" />
          <circle cx="70" cy="10" r="4" />
          <circle cx="100" cy="10" r="4" />
        </svg> */}
      </div>

      <LightGallery
        plugins={[lgZoom, lgVideo, lgAutoplay, lgRotate, lgThumbnail]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId="codeneksa"
        autoplayFirstVideo={false}
        elementClassNames="gallery max-w-7xl mx-auto"
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}
      >
        {gallery.map((item) => (
          <a
            key={item.id}
            data-lg-size="1600-1067"
            className="gallery__item cursor-pointer"
            data-src={item.img}
            data-sub-html={`<h4>${item.alt}</h4>`}
          >
            <img
              className="img-responsive transition-all duration-300 hover:scale-105 hover:brightness-110"
              src={item.img}
              alt={item.alt}
            />
          </a>
        ))}
      </LightGallery>

      {/* Custom Styles */}
      <style>{`
        .gallery__item img {
          width: 100%;
          height: auto;
          object-fit: cover;
          padding-left:5px;
        }
      `}</style>
    </div>
  );
};

export default Lightgallery;
