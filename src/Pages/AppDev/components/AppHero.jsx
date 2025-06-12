import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import '../styles/apphero.css';
// You can use any mobile app animation JSON file here
import mobileAppAnim from '../../../anim/developer-blue.json';

const AppHero = () => {
  const animRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: mobileAppAnim,
    });

    return () => animation.destroy();
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="app-hero section"
    >
      <div className="container">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="app-hero__header"
        >
          <h1 className="app-hero__title">
            Mobile <span className="highlight">App Development</span> Solutions
          </h1>
          <p className="app-hero__subtitle">
            Transform your ideas into powerful mobile applications that engage users and drive business growth
          </p>
        </motion.div>
        
        <div className="app-hero__wrapper">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="app-hero__content"
          >
            <h6 className="subtitle">Mobile App Development</h6>
            <h2>Building Apps That Users Love</h2>
            <p className="description">
              We create native and cross-platform mobile applications that deliver exceptional 
              user experiences. From concept to deployment, our expert team ensures your app 
              stands out in the competitive mobile marketplace.
            </p>
            
            <div className="app-hero__features">
              <div className="feature__item">
                <i className="ri-smartphone-line"></i>
                <span>Native iOS & Android</span>
              </div>
              <div className="feature__item">
                <i className="ri-code-line"></i>
                <span>Cross-Platform Development</span>
              </div>
              <div className="feature__item">
                <i className="ri-cloud-line"></i>
                <span>Cloud Integration</span>
              </div>
              <div className="feature__item">
                <i className="ri-shield-check-line"></i>
                <span>Secure & Scalable</span>
              </div>
            </div>
            
            <div className="app-hero__buttons">
              <Link to="/contactus">
                <button className="primary__btn">Start Your App</button>
              </Link>
              <Link to="#portfolio">
                <button className="secondary__btn">View Our Apps</button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="app-hero__animation"
          >
            <div ref={animRef} className="animation-container"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="app-hero__stats"
        >
          <div className="stat__item">
            <span className="stat__number">50+</span>
            <span className="stat__label">Apps Developed</span>
          </div>
          <div className="stat__item">
            <span className="stat__number">1M+</span>
            <span className="stat__label">Downloads</span>
          </div>
          <div className="stat__item">
            <span className="stat__number">4.8★</span>
            <span className="stat__label">Average Rating</span>
          </div>
          <div className="stat__item">
            <span className="stat__number">100%</span>
            <span className="stat__label">Client Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AppHero;
