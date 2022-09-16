import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import "../../styles/services.css";

const serviceData = [
  {
    path: "/appdevelopment",
    icon: "ri-apps-line",
    title: "App Development",
    desc: "We have experience designing and building mobile apps that help you take your business to the next level.",
  },
  {
    path: "/webdevelopment",
    icon: "ri-code-s-slash-line",
    title: "Web Design",
    desc: "We offer website design and development services. We'll work with you to ensure your website is well-planned, attractive and easy to use. ",
  },
  {
    path: "/graphicsdesign",
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "We can help you create the graphics that help your business get noticed.",
  },
  {
    path: "#",
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "We enable your business to tap into the internet and reach customers directly.",
  },
];

const Services = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1.5 }}
    id="service">
      <div className="container">
        <div className="services__top-content">
          <motion.h6 
          className="subtitle">Our Services</motion.h6>
          <motion.h2>Save time managing your business with</motion.h2>
          <motion.h2 className="highlight"> our best services</motion.h2>
        </div>
        <div className="wrapper">
          <div className="service__item_wrapper">
            {serviceData.map((item, index) => (
              <motion.div 
              initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5
                  }}
              className="service__item" key={index}>
                <Link to={item.path}>
                  <span className="service__icon">
                    <i class={item.icon}></i>
                  </span>
                  <motion.h3
                  className="service__title">{item.title}</motion.h3>
                  <p className="description">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
