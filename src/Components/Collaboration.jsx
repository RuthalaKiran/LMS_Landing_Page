import React from "react";
import flipkart from "../assets/collab/flipkart.png";
import bigbasket from "../assets/collab/bigbasket.png";
import blinkit from "../assets/collab/blinkit.png";
import hdb from "../assets/collab/hdb.png";
import icici from "../assets/collab/icici.png";
import medplus from "../assets/collab/medplus.png";
import zepto from "../assets/collab/zepto.png";
import hdfcbank from "../assets/collab/hdfcbank.png";
import { Banner } from "./Banner";

const Collaboration = () => {
  const images = [
    flipkart,
    bigbasket,
    blinkit,
    hdfcbank,
    hdb,
    icici,
    zepto,
    medplus,
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  return (
    <section className="mx-4 sm:mx-6 md:mx-12 lg:mx-28 py-8 sm:py-10 md:pt-12 md:pb-0">
      <div className="relative">
        <svg
          className="hidden sm:block animate-float-left-right absolute -top-10 left-20 w-8 h-8 text-blue-500 opacity-50 rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative">
          Our Collaborations
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full"></span>
        </h1>
      </div>

      <div className="py-4 sm:py-5 md:pt-10 md:pb-0">
        <Banner images={images} speed={20000} />
      </div>
    </section>
  );
};

export default Collaboration;
