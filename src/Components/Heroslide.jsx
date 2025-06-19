import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/img17.jpg";
import img2 from "../assets/img6.jpg";
import img3 from "../assets/img10.jpg";
import img4 from "../assets/img18.jpg";

const sliderData = [
  {
    id: 1,
    img: img1,
    desc: "A proud moment: Our MLA joins Codeneksa to inaugurate the journey of innovation.",
  },
  {
    id: 2,
    img: img2,
    desc: "Empowering young minds through interactive classroom teaching.",
  },
  {
    id: 3,
    img: img3,
    desc: "Celebrating milestones with our MLA and future tech leaders at Codeneksa.",
  },
  {
    id: 4,
    img: img4,
    desc: "Honoring collaboration with our MLA to inspire the next generation of coders.",
  },
];


const Heroslide = () => {
  return (
    <div className="h-auto py-10 w-full flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000, // Changed to 3000ms (3 seconds) for better visibility
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        //   renderBullet: (index, className) =>
        //     `<span class="${className} w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full transition-all duration-300 hover:bg-blue-600"></span>`,
        // }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Pagination, Navigation, Autoplay]} // Added Autoplay module
        className="mySwiper w-full h-[70vh]"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[70vh] relative">
              <img
                src={slide.img}
                alt={slide.desc}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              {/* Description container */}
              <div className="absolute inset-0 flex items-end justify-center z-20 pb-5">
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center px-4 max-w-2xl">
                  {slide.desc}
                </p>
              </div>
              {/* Subtle shadow for image enhancement */}
              <div className="absolute inset-0 bg-black/10 shadow-2xl rounded-lg"></div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="absolute z-30 flex justify-between w-full top-1/2 transform -translate-y-1/2 px-2 sm:px-4">
          <div className="swiper-button-prev-custom cursor-pointer text-white text-3xl sm:text-4xl rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            &lt;
          </div>
          <div className="swiper-button-next-custom cursor-pointer text-white text-3xl sm:text-4xl rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            &gt;
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Heroslide;
