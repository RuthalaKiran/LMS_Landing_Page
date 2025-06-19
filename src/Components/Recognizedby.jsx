import React from "react";
import startupindia from "../assets/startupindia.png";
import Apshe from "../assets/Apsche.png";
import aicte from "../assets/aicte.png";
import msme from "../assets/msme.png";


const Recognizedby = () => {
  return (
    <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center pb-4 sm:pb-5 md:pb-6">
        Recognised By
      </h1>
      <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-14 flex-wrap">
        <img src={startupindia} className="w-28 sm:w-32 md:w-44 object-cover" alt="Startup India" />
        <img src={Apshe} className="w-20 sm:w-22 md:w-28 object-cover" alt="APCHE" />
        <img src={aicte} className="w-20 sm:w-22 md:w-28 object-cover" alt="AICTE" />
        <img src={msme} className="w-20 sm:w-22 md:w-28 object-cover" alt="MSME" />
      </div>
    </div>
  );
};

export default Recognizedby;