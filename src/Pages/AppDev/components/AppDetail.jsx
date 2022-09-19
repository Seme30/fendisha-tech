import React, { useEffect, useRef } from "react";
import "../styles/appdetail.css";
import lottie from "lottie-web";
import mobileapp from "../../../anim/mobile-development.json";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const AppDetail = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: mobileapp,
    });
    return () => lottie.stop();
    // More logic goes here
  }, []);

  return (
    <section className="section app__section">
      <div className="container">
        <div className="app__wrappers">
          <motion.div 
          initial={{ x: -50, opacity: 0.5}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="app__content">
            <h6 className="subtitle">App Development</h6>
            <p className="description app__content-des">
              With the help of our team of developers and designers, we will
              build mobile apps for your services by employing latest app
              development technologies and processes to create great user
              experiences. We build mobile apps for a wide range of services,
              including simple utility apps to help your business run more
              efficiently.
            </p>
          </motion.div>
          <div className="app__detail">
            <motion.div
            initial={{ x: 50, opacity: 0.5}}
            whileInView={{ x: 0, opacity: 1}}
            transition={{duration: 0.5}}
            ref={anime} className="appdetail__content"></motion.div
            >
            <Link to="/contactus">
              <button className="secondary__btn app__btn">Contact us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDetail;
