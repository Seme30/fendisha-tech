import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../styles/webintro.css";
import developerblue from "../../../anim/developer-blue.json";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const WebIntro = () => {

  const anime =  useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: developerblue,
    });
    return () => lottie.stop();
    // More logic goes here
  }, []);
  return (
    <motion.section 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    className="section web__section">
      <div className="container">
        <h2 className="highlight web__title">
          {" "}
          Website Design and Development
        </h2>
        <div className="web__wrapper">
          <motion.div  
          initial={{ y: -150 }}
          animate={{ y: -50 }}
          transition={{ duration: 1 }}
          ref={anime} className="web__img">
          </motion.div>
          <motion.div 
          initial={{ y: -150 }}
          animate={{ y: -50 }}
          transition={{ duration: 1 }}
          className="web__content">
            <h6 className="subtitle">Web design</h6>
            <p className="description web__content-des">
              Our designers ensure that your business has a website that
              captures users and ensures to deliver high-quality results. Our
              team of eager web experts work hard to deliver websites that are
              user friendly, mobile responsive and easy to navigate. Our team
              know how to create catchy design which can help you in increasing
              your online sales.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WebIntro;
