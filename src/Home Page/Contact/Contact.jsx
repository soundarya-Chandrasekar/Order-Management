import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.src =
        "https://www.google.com/maps?q=kalliampudur,+Tamil+Nadu&output=embed";
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/*  Contact Info */}
        <div className={styles.footerSection}>
          <h2>Contact Us</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> 157, South Street, Erode, TN, India
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 94422 40787
          </p>
          <p>
            <i className="fas fa-envelope"></i> sowthanya@gmail.com
          </p>
          <p>
            <i className="fas fa-clock"></i> Mon – Sat (10AM – 6.30PM)
          </p>
        </div>

        {/*  Follow Us */}
        <div className={styles.footerSection}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/*  Map Section */}
        <div className={`${styles.footerSection} ${styles.mapSection}`}>
          <h2>Our Location</h2>
          <iframe
            ref={mapRef}
            title="Google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/*  Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>
          &copy; 2025 <span>Sowthanya</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
