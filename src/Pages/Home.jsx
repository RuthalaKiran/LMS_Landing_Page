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

const Home = () => {
  return (
    <div>
      <div
        className=""
        style={{
          background: "linear-gradient(293deg, #f7f7f7 0%, #fffae0 100%)",
        }}
      >
        <Navbar />
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
