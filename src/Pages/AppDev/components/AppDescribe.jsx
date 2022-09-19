import React, { useEffect, useRef } from "react";
import "../styles/appdesc.css";
import lottie from "lottie-web";
import mobileapp from "../../../anim/mobile-app-showcase.json";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AppDescribe = () => {


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
    <section 
    className="section app__section">
      <div className="container">
        <div className="app__wrapper">
          <motion.div 
          initial={{ x: -50, opacity: 0.3}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="app__content">
            <h6 className="subtitle">Benefits of Mobile App for business</h6>
            <p className="description app__content-des">
              <ul>
                <li>Mobile Apps Strengthen Customer Relationships</li>
                <li>Mobile Apps Also Strengthen Your Brand</li>
                <li>
                  Mobile Apps Offer Customers 24/7 Access To Your Business
                </li>
                <li>Mobile Apps Provide Excellent Customer Insights </li>
                <li>Mobile Apps Are Excellent Marketing Tools</li>
              </ul>
              <br />
              Build an App for your Business
            </p>
            <Link to="/contactus">
            <button className="secondary__btn">Contact us</button>
            </Link>
          </motion.div>
          <motion.div 
          initial={{ x: 50, opacity: 0.3}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="app__img">
            <div ref={anime} alt="app-img"></div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default AppDescribe;
