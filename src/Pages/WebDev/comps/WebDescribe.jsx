import React from "react";
import jscode from "../../../images/jscode.svg";
import "../styles/webdescribe.css";
import { motion } from 'framer-motion'

const WebDescribe = () => {
  return (
    <motion.section 
    initial={{ y: 150, opacity: 0.9 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="section web__section">
      <div className="container">
        <div className="web__wrapper">
          <div className="web__content">
            <h6 className="subtitle">Website Development</h6>
            <p className="description web__content-des">
              Creating websites that automatically attract any business's
              target audience. We have been providing businesses with
              user-centric designs that are both simple and appealing for years.
              Our designers team work hard to deliver websites that have top
              notch user-experience and can create amazing websites that are not
              only visually appealing but also easy to use for both website
              owner and visitors.
            </p>
          </div>
          <div className="web__img">
            <img src={jscode} alt="website-img" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WebDescribe;
