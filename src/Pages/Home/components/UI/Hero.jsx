import React from "react";
import front from "../../images/front.svg";
import "../../styles/hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section hero__section"
      id="home"
    >
      <div className="container">
        <div className="hero__wrapper">
          <motion.div
            initial={{ y: -150 }}
            animate={{ y: -50 }}
            transition={{ duration: 1 }}
            className="hero__content"
          >
            <div>
              <h2> It’s how the world </h2>
              <h2> sees you! </h2>
            </div>
            <p className="description">
              Web design is not about making a website—it is about making an
              investment in your organization. our web designs takes into
              account more than just aesthetics… we'll build it as a reflection
              of you, your company, and your vision.
            </p>

            <Link to="/contactus">
              <div className="hero__btns">
                <button className="primary__btn">Contact Us Now</button>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -150 }}
            animate={{ y: -50 }}
            transition={{ duration: 1 }}
            className="hero__img__wrapper"
          >
            <div className="hero__img">
              <img src={front} alt="hero-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
