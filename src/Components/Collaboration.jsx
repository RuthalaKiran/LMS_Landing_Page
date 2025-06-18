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
    <section className="mx-4 sm:mx-6 md:mx-12 lg:mx-28 py-8 sm:py-10 md:py-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center pb-4 sm:pb-5 md:pb-6">
        Our Collaborations
      </h1>
      <div className="py-4 sm:py-5 md:py-6">
        <Banner images={images} speed={20000} />
      </div>
    </section>
  );
};

export default Collaboration;