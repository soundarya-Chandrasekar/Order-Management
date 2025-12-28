import React from "react";
import styles from "../Component-Style/About.module.css";
import aboutImage from "../assets/about.jpg";
import dividerImage from "../assets/about-page.jpg";

const About = ({ showDivider = true }) => {
  return (
    <section className={styles.aboutSection}>
      {/* Divider section only when showDivider = true */}
      {showDivider && (
        <div className={styles.imageWrapper}>
          <img
            src={dividerImage}
            alt="About Divider"
            className={styles.dividerImage}
          />
          <div className={styles.text}>
            <h2>About Us</h2>
          </div>
        </div>
      )}

      {/* About content */}
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <div className={styles.aboutPicContainer}>
            <img src={aboutImage} alt="Sowthanya" className={styles.aboutPic} />
          </div>
        </div>

        <div className={styles.aboutInfo}>
          <div className={styles.sectionTitle}>
            <h3>About Us</h3>
            <h2>Company in Brief</h2>
          </div>

          <p className={`${styles.aboutBody} ${styles.para}`}>
            Established in 1994, our company began with traditional, manual yarn
            wrapping methods, supporting a booming export market—especially for
            dhothis. Over time, we adopted improved techniques by wrapping yarn
            into bobbins and cones, supplying quality yarns to handloom weavers.
            Our focus has always remained on preserving Kerala’s culture through
            the production of Kerala Vesti (Dhothi) and Settu Mundu, the iconic
            traditional wear of the state.
          </p>

          <p className={`${styles.aboutBody} ${styles.para}`}>
            As we grew, we set up our own spinning unit to ensure consistent
            quality and later introduced in-house yarn dyeing, both for our
            needs and to take custom orders. With over 30 years of experience,
            we continue to blend traditional craftsmanship with modern methods,
            staying committed to quality, culture, and supporting the handloom
            weaving community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
