import React from "react";
import "../styles/appintro.css";
// import phone1 from "../images/MobilePhone.svg";
import phone from "../../../images/Smartphone.svg";

import { motion } from "framer-motion";

const AppIntro = () => {
  

  return (
    <section className="section app_section">
      <div className="container">
        <h2 className="highlight app__title"> Mobile App Development</h2>
        <div className="app__wrapper">
          <motion.div 
          initial={{ x: -50, opacity: 0.5}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
           className="app__img">
            <img src={phone} alt="img" />
           </motion.div>

          <motion.div 
          initial={{ x: 50, opacity: 0.5}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="app__content">
            <h6 className="subtitle">Mobile App</h6>
            <p className="description app__content-des">
              Our mobile app developers will build custom, high quality mobile
              apps for your business. We are experts in building native
              applications that look and feel like native apps, but work in any
              environment. That's why our app developers make sure to keep you
              on the cutting-edge of web and mobile technology. And don't forget
              - we can help you customize these apps for the platforms your
              customers use most.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppIntro;
