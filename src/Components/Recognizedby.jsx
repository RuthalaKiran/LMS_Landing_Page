import React from "react";
import startupindia from "../assets/startupindia.png";
import Apshe from "../assets/Apsche.png";
import aicte from "../assets/aicte.png";
import msme from "../assets/msme.png";

const Recognizedby = () => {
  return (
    <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="pb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c54] text-center pb-4 relative">
          Recognised By
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-[#ff5733] rounded-full"></span>
        </h1>
      </div>

      <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-14 flex-wrap">
        <img
          src={startupindia}
          className="w-28 sm:w-32 md:w-44 object-cover"
          alt="Startup India"
        />
        <img
          src={Apshe}
          className="w-20 sm:w-22 md:w-28 object-cover"
          alt="APCHE"
        />
        <img
          src={aicte}
          className="w-20 sm:w-22 md:w-28 object-cover"
          alt="AICTE"
        />
        <img
          src={msme}
          className="w-20 sm:w-22 md:w-28 object-cover"
          alt="MSME"
        />
      </div>
    </div>
  );
};

export default Recognizedby;
