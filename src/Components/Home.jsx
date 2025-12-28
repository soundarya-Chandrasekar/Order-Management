import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../Home Page/NavBar/Navbar"
import ImageSlider from "../Home Page/ImageSlider/ImageSlider"
import About from "./About";//  updated import — your reusable About component
import WhyChooseUs from "../Home Page/ChooseUs/WhyChooseUs"
import WorkingProcess from "../Home Page/WorkingProcess/WorkingProcess";
import Contact from "../Home Page/Contact/Contact";


const Home = () => {
  // ---------- Slider Logic ----------
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const arraylist = ["one", "two", "three"];
  const quotes = [
    "To deliver premium-quality yarns that meet global standards while empowering local communities and promoting sustainable practices.",
    "Threads that tell your story. A thread, when woven with care, can change the fabric of the world.",
    "Great fabric begins with great yarn and great yarn begins here."
  ];

  const updateSlider = () => {
    if (containerRef.current) {
      containerRef.current.style.background = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("Photo/${arraylist[index]}.jpg") center/cover no-repeat`;
    }
  };

  useEffect(() => {
    updateSlider();
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? arraylist.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === arraylist.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <Helmet>
        <title>Sowthanya Wrapping</title>
        <link rel="icon" type="image/png" href="/logo_pto.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </Helmet>

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Image Slider */}
      <ImageSlider
        index={index}
        containerRef={containerRef}
        quotes={quotes}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      {/* About Us */}
      <About showDivider={false} /> {/* No top image when used in Home */}

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Working Process */}
      <WorkingProcess />

      {/* Footer / Contact */}
      <Contact />
    </div>
  );
};

export default Home;
