import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WhyChooseUs.module.css";
import sideImg from "../../assets/Side Image.png";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // Use your existing route
  };

  return (
    <div className={styles.containerChoose}>
      {/* Row 1 — Title */}
      <div className={styles.rowOne}>
        <div className={styles.chooseTitle}>
          <h3>Why Choose Us</h3>
          <h1>The Perfect Blend of Passion and Performance</h1>
          <h2>OUTDOOR SINCE 1994</h2>
        </div>
      </div>

      {/* Row 2 — Flex Columns */}
      <div className={styles.rowTwoFlex}>
        {/* Left two columns in a wrapper */}
        <div className={styles.flexLeft}>
          {/* Column 1 */}
          <div className={styles.col}>
            <h2>
              <i className="fa-regular fa-circle-check"></i> Our Mission
            </h2>
            <p>
              Is to recycle garment waste generated across the globe from
              garment manufacturing mills.
            </p>

            <h2>
              <i className="fa-regular fa-circle-check"></i> Global Warming
            </h2>
            <p>
              By preserving water, energy, and reducing greenhouse emissions, we
              actively play our part in battling global warming.
            </p>

            <h2>
              <i className="fa-regular fa-circle-check"></i> Our Aim
            </h2>
            <p>
              To internalise the externalities in the textile chain and spread
              awareness in the fashion industry traditionally.
            </p>
          </div>

          {/* Column 2 */}
          <div className={styles.col}>
            <h2>
              <i className="fa-regular fa-circle-check"></i> Our Vision
            </h2>
            <p>
              Is to minimise reliance on human error and strive for perfection
              with our automation process.
            </p>

            <h2>
              <i className="fa-regular fa-circle-check"></i> Shades Variety
            </h2>
            <p>
              We offer a wide range of rich and consistent shades that are
              carefully processed to maintain uniformity.
            </p>

            <h2>
              <i className="fa-regular fa-circle-check"></i> Assured Quality
            </h2>
            <p>
              Our materials undergo rigorous quality checks to ensure strength,
              durability, and purity—meeting industry standards.
            </p>

            <div className={styles.chooseButton}>
              <a>
                <button onClick={handleContactClick}>Contact Us</button>
              </a>
            </div>
          </div>
        </div>

        {/* Column 3 — Image */}
        <div className={styles.colImage}>
          <img src={sideImg} alt="Side Image" className={styles.rightImage} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
