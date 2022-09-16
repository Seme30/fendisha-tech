import React from "react";
import "../styles/appdesc.css";
import phone from "../images/Smartphone.svg";
import { motion } from 'framer-motion'

const AppDescribe = () => {
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
            <button className="secondary__btn">Contact us</button>
          </motion.div>
          <motion.div 
          initial={{ x: 50, opacity: 0.3}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="app__img">
            <img src={phone} alt="app-img" />
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default AppDescribe;
