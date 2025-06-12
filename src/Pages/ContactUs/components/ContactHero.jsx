import React from 'react';
import { motion } from 'framer-motion';
import '../styles/contacthero.css';

const ContactHero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-hero section"
    >
      <div className="container">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-hero__content"
        >
          <h1 className="contact-hero__title">
            Get In <span className="highlight">Touch</span> With Us
          </h1>
          <p className="contact-hero__subtitle">
            Ready to start your next project? We'd love to hear from you. 
            Let's discuss how we can help bring your ideas to life.
          </p>
          
          <div className="contact-hero__features">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="feature__item"
            >
              <i className="ri-time-line"></i>
              <div>
                <h3>Quick Response</h3>
                <p>We respond to all inquiries within 24 hours</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="feature__item"
            >
              <i className="ri-customer-service-line"></i>
              <div>
                <h3>Expert Consultation</h3>
                <p>Free consultation with our technical experts</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="feature__item"
            >
              <i className="ri-shield-check-line"></i>
              <div>
                <h3>NDA Protection</h3>
                <p>Your ideas are safe with our confidentiality agreement</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="feature__item"
            >
              <i className="ri-award-line"></i>
              <div>
                <h3>Quality Assurance</h3>
                <p>Guaranteed quality with our proven development process</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="contact-hero__stats"
        >
          <div className="stat__item">
            <span className="stat__number">500+</span>
            <span className="stat__label">Projects Completed</span>
          </div>
          <div className="stat__item">
            <span className="stat__number">98%</span>
            <span className="stat__label">Client Satisfaction</span>
          </div>
          <div className="stat__item">
            <span className="stat__number">24h</span>
            <span className="stat__label">Response Time</span>
          </div>
          <div className="stat__item">
            <span className="stat__number">5+</span>
            <span className="stat__label">Years Experience</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactHero;
