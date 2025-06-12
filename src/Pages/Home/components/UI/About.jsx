import React, { useRef, useEffect } from "react";
import "../../styles/about.css";
// import Developer from "../../images/Developer.svg";
import lottie from "lottie-web";
import developerteam from "../../../../anim/developer-team.json";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Starting your project with care and as such it shapes much of how the final product will look and feel. ",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated Team",
    desc: "A high-quality professional team, dedicated to building and delivering the best software possible.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Hours support",
    desc: "Your success is our goal, and our team of experts is available 24/7 to help you with any questions.",
  },
];

const About = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: developerteam,
    });
    return () => lottie.stop();
    // More logic goes here
  }, []);

  return (
    <section id="about">
      <div className="container">
        <motion.div 
        initial={{ y: -100, opacity: 0.5}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{duration: 1}}
        className="about__wrapper">
          <div className="about__content">
            <div className="about__content-wrapper">
              <h6 className="subtitle">Why choose us</h6>
              <h2>Specialists in helping clients with</h2>
              <h2 className="highlight"> technical challenges</h2>
            </div>
            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div className="choose__us-content">
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={anime} className="about__img"></div>
        </motion.div>
        <Link to="/contactus">
          <div className="secondary__btn contact_btn">Contact Us</div>
        </Link>
      </div>
    </section>
  );
};

export default About;
