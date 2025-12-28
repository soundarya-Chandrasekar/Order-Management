import React, { useState, useEffect, useRef } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const containerRef = useRef(null);

  // Image filenames — place inside public/Photo/
  const arraylist = ["one", "two", "three"];

  const quotes = [
    "To deliver premium-quality yarns that meet global standards while empowering local communities and promoting sustainable practices.",
    "Threads that tell your story. A thread, when woven with care, can change the fabric of the world.",
    "Great fabric begins with great yarn and great yarn begins here.",
  ];

  // Update background image
  const updateSlider = () => {
    if (containerRef.current) {
      containerRef.current.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url("/Photo/${arraylist[index]}.jpg") center/cover no-repeat
      `;
    }
  };

  // When index changes — fade animation
  useEffect(() => {
    setFade(true);
    updateSlider();
    const timer = setTimeout(() => setFade(false), 1200);
    return () => clearTimeout(timer);
  }, [index]);

  // Auto change every 7 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % arraylist.length);
    }, 7000);
    return () => clearInterval(autoSlide);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? arraylist.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === arraylist.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`${styles.container} ${fade ? styles.fade : ""}`}
      ref={containerRef}
    >
      {/* Quote Text */}
      <div className={styles.quoteBox}>
        <h2 key={index} className={styles.quoteText}>
          {quotes[index]}
        </h2>
      </div>

      {/* Navigation Arrows */}
      <button className={styles.btnLeft} onClick={handlePrev}>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      <button className={styles.btnRight} onClick={handleNext}>
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
};

export default ImageSlider;
