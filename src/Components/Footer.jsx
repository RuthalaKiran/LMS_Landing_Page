import React from "react";
import footerimg from "../assets/footer.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[rgba(37,38,65,1)] px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center">
        <a href="/">
          {" "}
          <img
            className="w-40 sm:w-48 md:w-56"
            src={footerimg}
            alt="Codeneksa logo"
          />
        </a>

        <p className="text-gray-100 text-sm sm:text-base md:text-lg text-center">
          Subscribe to get our Newsletter
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 sm:w-auto">
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

        {/* Contact Info */}
        <div className="text-white text-sm sm:text-base flex flex-col items-center gap-2 leading-relaxed mt-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <p>
              {" "}
              CS CoWorking Spaces, Hitex Road, Izzathnagar, Khanammet,
              Hyderabad, Telangana 500081
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>+91 91820 29334</p>
          </div>
          <div className="flex items-center gap-2">
            <CiMail />
            <p>codeneksa@codeneksalearning.com</p>
          </div>
        </div>

        <p className="text-white text-xs sm:text-sm md:text-base text-center mt-4">
          <a href="">Careers</a> | <a href="">Privacy Policy</a> |{" "}
          <a href="">Terms & Conditions</a>
        </p>
        <p className="text-white text-xs sm:text-sm md:text-base text-center">
          © 2025 Codeneksa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
