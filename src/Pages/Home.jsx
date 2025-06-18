import React from "react";
import Herosection from "../Components/Herosection";
import WhyCodeneksaSection from "../Components/WhyCodeneksaSection";
import Recognizedby from "../Components/Recognizedby";
import Collaboration from "../Components/Collaboration";
import Lightgallery from "../Components/Lightgallery";
import Navbar from "../Components/Navbar";
import Categories from "../Components/Categories";
import SocialCountersSection from "../Components/SocialCountersSection";
import Footer from "../Components/Footer";
import Contactus from "../Components/Contactus";
import Aboutus from "../Components/Aboutus"
import Heroslide from "../Components/Heroslide";

const Home = () => {
  return (
    <div>
      <div
        className=""
        style={{
          background: "linear-gradient(259deg,rgba(242, 240, 237, 1) 0%, rgba(181, 243, 255, 1) 100%)",
        }}
      >
        <Navbar />
        <Heroslide/>
        <Herosection />
        <Categories />
        <Aboutus/>
        <WhyCodeneksaSection />
        <Recognizedby />
        <Collaboration />
        <Lightgallery />
        <SocialCountersSection />
        <Contactus />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
