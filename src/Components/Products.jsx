import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import styles from "../Component-Style/Products.module.css";
import { useNavigate } from "react-router-dom";
import productPage from "../assets/product-Page.jpg";
import productOne from "../assets/product-one.jpg";
import productTwo from "../assets/product-two.jpg";
import productThree from "../assets/product-three.jpg";
import productFour from "../assets/product-four.jpg";
import productFive from "../assets/product-five.jpg";
import productSix from "../assets/product-six.jpg";
import focusOne from "../assets/main-focus1.jpg";
import focusTwo from "../assets/main-focus2.jpg";
import focusThree from "../assets/main-focuus3.jpg";

const Products = () => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      const card = trackRef.current.querySelector(`.${styles.features}`);
      const cardWidth = card.offsetWidth + 20;
      trackRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      const card = trackRef.current.querySelector(`.${styles.features}`);
      const cardWidth = card.offsetWidth + 20;
      trackRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate("/order"); // Use your existing route
  };

  return (
    <div className={styles.productsPageWrapper}>
      <Helmet>
        <title>Sowthanya's Product</title>
        <link rel="icon" type="image/png" href="/logo_pto.png" />
      </Helmet>

      <div className={styles.imageWrapper}>
        <div className={styles.dividerImage}>
          <img src={productPage} alt="Sowthanya" />
        </div>
        <div className={styles.text}>
          <h2>Products</h2>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.container}>
        <button
          className={`${styles.btnGlobal} ${styles.scrollBtn} ${styles.left}`}
          onClick={scrollLeft}
        >
          <i className="fa-solid fa-caret-left"></i>
        </button>

        <div className={styles.cardTrack} ref={trackRef}>
          {[
            {
              img: productOne,
              title: "Dying",
              text: `Bring vibrant life to your fabrics with our high-quality dyeing process. We use premium dyes and advanced techniques to ensure rich,uniform colors that last wash after wash. Our precise dying methods maintain fabric strength and consistency while achieving perfect shades every times`,
            },
            {
              img: productTwo,
              title: "Bundled Yarn",
              text: `Our bundled yarns are carefully processed to deliver consistent color, texture, and strength across every strand. Ideal for weaving, knitting and fabric finishing, each bundle is precision-dyed for long-lasting vibrancy and smooth performance in our production environment.`,
            },
            {
              img: productThree,
              title: "Cones",
              text: `We supply premium-quality cones designed for seamless use in weaving, knitting and sewing machines. Each cone is precisely wound to ensure smooth yarn flow, reduce breakage, and maximum productivity -- perfect for both industrial and handcrafted textile application.`,
            },
            {
              img: productFour,
              title: "Bobins",
              text: `Our high-grade bobbins are crafted to deliver smooth, tangle-free yarn release for consistent performance in weaving and spinning operations. Designed for durability and precison winding, each bobbin ensure uniform tension and efficiency across every stage of textile production.`,
            },
            {
              img: productFive,
              title: "Weaving",
              text: `Our Weaving process blends traditional craftmanship with modern technology to create fabrics of axceptional quality and strength. Using precision looms and high-grade yarns, we produce textiles with fine texture, perfect alignment, and lasting durability suited for deliver application.`,
            },
            {
              img: productSix,
              title: "Dhoti & Saree",
              text: `Our weaving unit specialize in crafting premium dhotis and Kerala-style sarees that reflect traditional elegance with modern precision. Each piece is woven from fine-quality yarn using advanced looms, ensuring soft texture, perfect finish and long-lasting comfort.`,
            },
          ].map((item, index) => (
            <div key={index} className={styles.features}>
              <div className={styles.imgContainer}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.imgView}
                />
              </div>
              <h2 className={styles.featureTitle}>{item.title}</h2>
              <p className={styles.textParagraph}>{item.text}</p>
              <div className={styles.order}>
                <button
                  onClick={handleOrderClick}
                  className={styles.mainGlobal}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.btnGlobal} ${styles.scrollBtn} ${styles.right}`}
          onClick={scrollRight}
        >
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.products}>
        <div className={styles.title}>
          <h2>Our Trademark Product</h2>
        </div>

        <div className={styles.productsRow}>
          {[
            { img: focusOne, title: "Dhothi" },
            { img: focusTwo, title: "Silk Set-mund" },
            { img: focusThree, title: "Cotton-Border Set-mund" },
          ].map((prod, i) => (
            <div key={i} className={styles.imgProd}>
              <img src={prod.img} alt={prod.title} className={styles.imgView} />
              <h2 className={styles.prodTitle}>{prod.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
