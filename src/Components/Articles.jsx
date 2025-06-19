import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

import article1 from "../assets/articles/article1.jpg";
import article2 from "../assets/articles/article2.jpg";
import article3 from "../assets/articles/article3.jpg";
import article4 from "../assets/articles/article4.jpg";
import article5 from "../assets/articles/article5.jpg";
import article6 from "../assets/articles/article6.jpg";

const Articles = () => {
const articles = [
  {
    id: 1,
    image: article1,
    title: "Empowering Students Through Training",
    desc: "Our expert-led training session aimed to equip students with essential technical skills, boosting their confidence and preparing them to face real-world industry challenges with clarity and determination.",
  },
  {
    id: 2,
    image: article2,
    title: "Interactive Skill Development Session",
    desc: "Students participated in an engaging, hands-on learning environment where they were encouraged to explore new coding concepts, collaborate in teams, and develop projects that reflect current industry needs.",
  },
  {
    id: 3,
    image: article3,
    title: "40 Students Selected at Vivek Degree College",
    desc: "A milestone achievement as 40 bright students from Vivek Degree College secured placements through our structured guidance, interview preparation, and industry-focused training programs.",
  },
  {
    id: 4,
    image: article4,
    title: "Successful Job Drive Event",
    desc: "Our job drive connected talented students with multiple hiring companies, creating valuable employment opportunities and opening doors for them to launch their careers with confidence.",
  },
  {
    id: 5,
    image: article5,
    title: "Free Intensive Program at Vivek Degree College",
    desc: "We conducted a completely free intensive training initiative to support students in gaining in-demand skills, building real-time projects, and getting ready for placement opportunities across top companies.",
  },
  {
    id: 6,
    image: article6,
    title: "Job Mela at Mandapeta Degree College",
    desc: "The job fair at Mandapeta Degree College was a huge success, providing students access to company representatives, career counseling, and multiple placement options to kickstart their professional journey.",
  },
];



  return (
    <div className="py-10 bg-[#f3f4f6]">
      <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative">
        Featured Articles & Stories
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full"></span>
      </h1>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-10">
        <Swiper
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-125%', 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ['125%', 0, -800],
              rotate: [0, 0, 90],
            },
          }}
          modules={[EffectCreative]}
          className="rounded-xl overflow-hidden"
        >
          {articles.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-lg shadow-md h-full">
                {/* Text Section */}
                <div className="sm:w-1/2 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c2c54] mb-2 sm:mb-3">{item.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">{item.desc}</p>
                </div>

                {/* Image Section */}
                <div className="sm:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto sm:h-[250px] md:h-[350px] lg:h-[400px] object-contain rounded-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 👈👉 Swipe Hint */}
        <p className="text-center text-sm text-gray-500 mt-4 animate-pulse">
          👈 Swipe to explore more 👉
        </p>
      </div>
    </div>
  );
};

export default Articles;
