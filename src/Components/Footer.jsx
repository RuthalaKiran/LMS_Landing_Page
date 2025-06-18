import React from "react";
import footerimg from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="bg-[rgba(37,38,65,1)] px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center">
        <img
          className="w-40 sm:w-48 md:w-56"
          src={footerimg}
          alt="Codeneksa logo"
        />
        <p className="text-gray-100 text-sm sm:text-base md:text-lg text-center">
          Subscribe to get our Newsletter
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6  sm:w-auto">
          <input
            type="email"
            className="bg-transparent outline-none border-2 rounded-full py-2 px-4 sm:px-5 text-sm sm:text-base text-white border-gray-700 focus:border-gray-400 w-full sm:w-64"
            placeholder="Your Email"
            name="email"
            id="email"
          />
          <button className="py-2 px-4 sm:px-5 bg-custom-gradient1 hover:bg-custom-gradient2 rounded-full text-white text-sm sm:text-base transition duration-200">
            Subscribe
          </button>
        </div>
        <p className="text-white text-xs sm:text-sm md:text-base text-center">
          Careers | Privacy Policy | Terms & Conditions
        </p>
        <p className="text-white text-xs sm:text-sm md:text-base text-center">
          © 2025 Codeneksa
        </p>
      </div>
    </footer>
  );
};

export default Footer;