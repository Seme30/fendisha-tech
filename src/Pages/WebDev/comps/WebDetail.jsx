import React from "react";
import "../styles/webdetail.css";
import img1 from '../../../images/jscode.svg'
import content from '../../../images/Content.svg'
import landing from '../../../images/Landing_Page.svg'
import apis from '../../../images/api.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const webDetail = [
  {
    imgUrl: content,
    title: "CMS",
    desc: "We design, develop and implement content management systems for different types of businesses.",
  },
  {
    imgUrl: landing,
    title: "Landing page",
    desc: "We create a stunning landing page that will increase website traffic and make you look like a professional business owner.",
  },
  {
    imgUrl: img1,
    title: "E-commerce",
    desc: "We Provide Easy-to-use e-commerce website. We want to work with you because we value your business and its success.",
  },
  {
    imgUrl: apis,
    title: "Third-Party API integration",
    desc: "We integrate with third-party APIs to help businesses connect, grow and drive revenue.",
  },
];

const WebDetail = () => {
  return (
    <section className="section web__section">
      <div className="container">
      <motion.h6 
      initial={{ x: -100, opacity: 0.7}}
      whileInView={{ x: 0, opacity: 1}}
      transition={{duration: 1}}
      className="subtitle other_service">Other Services</motion.h6>
        <div className="webdetail__wrapper">
          {webDetail.map((item, index) => (
            <motion.div 
            initial={{ scale: 0.9 }}
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
