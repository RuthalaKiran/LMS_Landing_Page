import React from "react";
import contactus from "../assets/contact.png";

const Contactus = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 md:py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10">
        <div className="flex justify-center lg:justify-end">
          <img
            src={contactus}
            alt="Contact illustration"
            className="w-full sm:w-3/4 md:w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>
        <div className="flex justify-center md:justify-start">
          <form
            action=""
            className="w-full  xl:w-[100%] p-4 sm:p-5 md:p-6 bg-orange-200 rounded-md flex flex-col gap-4 sm:gap-5"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-800">
              Fill out the form below, and one of our friendly representatives
              will give you a call as soon as possible.
            </p>
            <div className="name flex flex-col gap-2">
              <label className="text-sm sm:text-base text-gray-800">Name *</label>
              <input
                className="rounded-sm p-2 sm:p-3 text-sm sm:text-base outline-none focus:outline-2 focus:outline-blue-500"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="email-phone flex flex-col md:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4">
              <div className="email flex flex-col gap-2 w-full">
                <label className="text-sm sm:text-base text-gray-800">Email *</label>
                <input
                  className="rounded-sm p-2 sm:p-3 text-sm sm:text-base outline-none focus:outline-2 focus:outline-blue-500"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="phone flex flex-col gap-2 w-full">
                <label className="text-sm sm:text-base text-gray-800">Phone *</label>
                <input
                  className="rounded-sm p-2 sm:p-3 text-sm sm:text-base outline-none focus:outline-2 focus:outline-blue-500"
                  type="tel"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="message flex flex-col gap-2">
              <label className="text-sm sm:text-base text-gray-800">Message *</label>
              <textarea
                rows={4}
                className="w-full rounded-sm p-2 sm:p-3 text-sm sm:text-base outline-none focus:outline-2 focus:outline-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-custom-gradient1 hover:bg-custom-gradient2 duration-200 px-4 sm:px-5 py-2 rounded-md text-white text-sm sm:text-base"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;