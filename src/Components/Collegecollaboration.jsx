import React from "react";
import college1 from "../assets/college1.png";
import college2 from "../assets/college2.png";
import college3 from "../assets/college3.png";
import college4 from "../assets/college4.png";
import college5 from "../assets/college5.png";
import college6 from "../assets/college6.png";
import { Banner } from "./Banner";

const Collegecollaboration = () => {
  const images = [
    college1,
    college2,
    college3,
    college4,
    college5,
    college6,
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  return (
    <section className=" mx-4 sm:mx-6 md:mx-12 lg:mx-28 py-8 sm:py-10  md:pt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative">
        Our 365 days Collaboration Institutions
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full"></span>
      </h1>
        
      <div className="py-4 sm:py-5 ">
        <Banner images={images} speed={20000} />
      </div>
    </section>
  );
};

export default Collegecollaboration;
