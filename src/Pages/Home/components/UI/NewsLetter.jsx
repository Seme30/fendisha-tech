import React from "react";
import { motion } from 'framer-motion'
import "../../styles/newsletter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="container" id='news__container'>
        <div className="newsletter__wrapper">
          <motion.div 
          initial={{ x: -100, opacity: 0.5}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 1}}
          className="news__content">
            <h6 className="subtitle">Lets' work</h6>
            <h2>
              Explore the {" "}
               <span className="highlight">hidden</span>
               {" "}ideas
            </h2>
          </motion.div>
          {/* <div className="newsletter__form">
            <input type="email" placeholder="Email"/>
            <button className="secondary__btn subscribe__btn">Subscribe Now</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
