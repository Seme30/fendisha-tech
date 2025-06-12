import React, { useEffect, useRef } from "react";
import "../styles/graphintro.css";
import lottie from "lottie-web";
import designer from "../../../anim/designer.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GraphIntro = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: designer,
    });
    return () => lottie.stop();
    // More logic goes here
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section graphics__section"
    >
      <div className="container">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="graphics__header"
        >
          <h2 className="graphics__title">
            Creative <span className="highlight">Graphics Design</span> Solutions
          </h2>
          <p className="graphics__subtitle">
            Transform your brand with stunning visual designs that captivate and convert
          </p>
        </motion.div>

        <div className="graphics__wrapper">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="graphics__img"
          >
            <div ref={anime}></div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="graphics__content"
          >
            <h6 className="subtitle graphics_design">Professional Design Services</h6>
            <h3>Bringing Your Vision to Life</h3>
            <p className="description graphics__content-des">
              Our talented graphics designers create compelling visual solutions that
              communicate your brand message effectively. From logos and branding to
              marketing materials and digital assets, we ensure every design element
              aligns with your business goals and resonates with your target audience.
            </p>

            <div className="graphics__features">
              <div className="feature__item">
                <i className="ri-palette-line"></i>
                <span>Brand Identity Design</span>
              </div>
              <div className="feature__item">
                <i className="ri-image-line"></i>
                <span>Marketing Materials</span>
              </div>
              <div className="feature__item">
                <i className="ri-smartphone-line"></i>
                <span>Digital Graphics</span>
              </div>
            </div>

            <div className="graphics__buttons">
              <Link to="/contactus">
                <button className="primary__btn">Get Started</button>
              </Link>
              <Link to="#portfolio">
                <button className="secondary__btn">View Portfolio</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GraphIntro;
