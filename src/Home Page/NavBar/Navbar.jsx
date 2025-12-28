import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleOrders = () => {
    setIsOrdersOpen((prev) => !prev);
  };
  const closeAllMenus = () => {
    setIsOrdersOpen(false);
    setIsMenuOpen(false);
  };

  // riggered when "Received Orders" is clicked
  const handleOrderHistoryClick = (e) => {
    e.preventDefault();
    setIsOrdersOpen(false); // close Orders dropdown
    setIsMenuOpen(false); // close mobile menu
    closeAllMenus(); // CLOSE EVERYTHING
    setShowPasswordPopup(true);
    setError("");
    setPassword("");
  };

  // Password verification
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "office123"; // change this to your own password

    if (password === correctPassword) {
      setShowPasswordPopup(false);
      navigate("/order-history");
    } else {
      setError(
        "Access Denied: You are restricted. This is for office use only!"
      );
    }
  };

  return (
    <header>
      <nav className={styles.nav}>
        {/* LOGO + TITLE */}
        <div className={styles.logoTitle}>
          <img src="/logo_pto.png" alt="Logo" />
          <span className={styles.businessName}>Sowthanya Wrapping</span>
        </div>

        {/* HAMBURGER ICON FOR MOBILE */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>

        {/* NAV LIST (Desktop + Mobile panel) */}

        <ul
          className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          <li>
            <Link to="/" onClick={closeAllMenus}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeAllMenus}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeAllMenus}>
              Our Products
            </Link>
          </li>

          <li className={styles.dropdownInsideMobile}>
            <button className={styles.dropbtn} onClick={toggleOrders}>
              Orders ▾
            </button>
            {isOrdersOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="/order" onClick={closeAllMenus}>
                    Order Now
                  </Link>
                </li>
                <li>
                  <Link to="/order-history" onClick={handleOrderHistoryClick}>
                    Received Order
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" onClick={closeAllMenus}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Password Popup --- office123*/}
      {showPasswordPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <h3>Restricted Access</h3>
            <p>
              This page is for office use only. Please enter the password:
              office123
            </p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={styles.passwordInput}
              />
              <div className={styles.popupButtons}>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowPasswordPopup(false)}
                >
                  Cancel
                </button>
              </div>
              {error && <p className={styles.errorMsg}>{error}</p>}
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
