import React from 'react';
import { motion } from 'framer-motion';
import '../styles/contactmap.css';

const ContactMap = () => {
  return (
    <section className="contact-map section" id="contact-map">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="map__header"
        >
          <h6 className="subtitle">Find Us</h6>
          <h2>Our Location</h2>
          <p className="section-description">
            Visit our office for face-to-face consultations and project discussions. 
            We're located in the heart of Addis Ababa's tech district.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="map__container"
        >
          <div className="map__wrapper">
            <div className="map__placeholder">
              <i className="ri-map-pin-line"></i>
              <h3>Interactive Map</h3>
              <p>Fendisha Tech Solutions</p>
              <p>123 Tech Street, Suite 456</p>
              <p>Innovation District, Addis Ababa</p>
              <button className="map__button">
                <i className="ri-navigation-line"></i>
                Get Directions
              </button>
            </div>
          </div>
          
          <div className="map__info">
            <div className="info__card">
              <div className="info__icon">
                <i className="ri-car-line"></i>
              </div>
              <div className="info__content">
                <h4>Parking Available</h4>
                <p>Free parking spaces available for visitors</p>
              </div>
            </div>
            
            <div className="info__card">
              <div className="info__icon">
                <i className="ri-bus-line"></i>
              </div>
              <div className="info__content">
                <h4>Public Transport</h4>
                <p>Easily accessible by bus and light rail</p>
              </div>
            </div>
            
            <div className="info__card">
              <div className="info__icon">
                <i className="ri-wheelchair-line"></i>
              </div>
              <div className="info__content">
                <h4>Accessibility</h4>
                <p>Wheelchair accessible building with elevator</p>
              </div>
            </div>
            
            <div className="info__card">
              <div className="info__icon">
                <i className="ri-wifi-line"></i>
              </div>
              <div className="info__content">
                <h4>Free WiFi</h4>
                <p>High-speed internet available for guests</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="map__directions"
        >
          <h3>How to Reach Us</h3>
          <div className="directions__grid">
            <div className="direction__item">
              <div className="direction__icon">
                <i className="ri-car-line"></i>
              </div>
              <div className="direction__content">
                <h4>By Car</h4>
                <p>Take the main highway and exit at Innovation District. Our building is on the right side of Tech Street.</p>
              </div>
            </div>
            
            <div className="direction__item">
              <div className="direction__icon">
                <i className="ri-subway-line"></i>
              </div>
              <div className="direction__content">
                <h4>By Light Rail</h4>
                <p>Take the Blue Line to Innovation Station. We're a 5-minute walk from the station.</p>
              </div>
            </div>
            
            <div className="direction__item">
              <div className="direction__icon">
                <i className="ri-bus-line"></i>
              </div>
              <div className="direction__content">
                <h4>By Bus</h4>
                <p>Bus routes 15, 23, and 45 stop directly in front of our building.</p>
              </div>
            </div>
            
            <div className="direction__item">
              <div className="direction__icon">
                <i className="ri-taxi-line"></i>
              </div>
              <div className="direction__content">
                <h4>By Taxi/Ride Share</h4>
                <p>Available 24/7. Just tell the driver "Fendisha Tech, Innovation District".</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="map__cta"
        >
          <div className="cta__content">
            <h3>Schedule a Visit</h3>
            <p>Want to visit our office? Schedule an appointment and we'll give you a tour of our workspace.</p>
            <div className="cta__buttons">
              <button className="primary__btn">Book Appointment</button>
              <button className="secondary__btn">Virtual Tour</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
