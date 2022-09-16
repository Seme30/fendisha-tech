import React from "react";
import "../styles/webdetail.css";
import img1 from '../images/jscode.svg'
import content from '../images/Content.svg'
import landing from '../images/Landing_Page.svg'
import apis from '../images/api.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const webDetail = [
  {
    imgUrl: content,
    title: "CMS",
    desc: "If you are in need of content management system with wordpress or drupal, you are in the right place",
  },
  {
    imgUrl: landing,
    title: "Landing page",
    desc: "If you are in need of a landing page to be designed for your website, you are on the right spot, we will deliver you the code in no time",
  },
  {
    imgUrl: img1,
    title: "E-commerce",
    desc: "If you are in need of an e-commerce website with your own requirements, you can contact us with the link below",
  },
  {
    imgUrl: apis,
    title: "Third-Party API integration",
    desc: "If you wish to integrate your system with other third party services, you are in the right place, you can contact us with the link below",
  },
];

const WebDetail = () => {
  return (
    <section className="section web__section">
      <div className="container">
      <motion.h6 
      initial={{ x: -100, opacity: 0.5}}
      whileInView={{ x: 0, opacity: 1}}
      transition={{duration: 1}}
      className="subtitle other_service">Other Services</motion.h6>
        <div className="webdetail__wrapper">
          {webDetail.map((item, index) => (
            <motion.div 
            initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5
                  }}
            className="webdetail__content" key={index}>
              <img src={item.imgUrl} alt="img" />
              <h6 className="subtitle">{item.title}</h6>
              <p className="description webdetial__content-des">{item.desc}</p>
              <Link to="/contactus">
              <button className="secondary__btn">Contact us</button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDetail;
