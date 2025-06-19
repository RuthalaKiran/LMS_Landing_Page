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
import Aboutus from "../Components/Aboutus";
import Heroslide from "../Components/Heroslide";
import Collegecollaboration from "../Components/Collegecollaboration";
import Articles from "../Components/Articles";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <Navbar />
        <Heroslide />
        <Collegecollaboration />
        <Herosection />
        <Categories />
        <Aboutus />
        <WhyCodeneksaSection />
        <Articles/>
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
