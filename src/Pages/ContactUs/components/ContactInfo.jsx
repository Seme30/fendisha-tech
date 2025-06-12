import React from 'react';
import { motion } from 'framer-motion';
import '../styles/contactinfo.css';

const contactData = [
  {
    icon: 'ri-map-pin-line',
    title: 'Our Office',
    details: [
      'Fendisha Tech Solutions',
      '123 Tech Street, Suite 456',
      'Innovation District',
      'Addis Ababa, Ethiopia'
    ],
    action: 'Get Directions'
  },
  {
    icon: 'ri-phone-line',
    title: 'Phone Numbers',
    details: [
      '+251 911 123 456',
      '+251 922 789 012',
      'Available 24/7 for urgent matters'
    ],
    action: 'Call Now'
  },
  {
    icon: 'ri-mail-line',
    title: 'Email Address',
    details: [
      'hello@fendishatech.com',
      'projects@fendishatech.com',
      'support@fendishatech.com'
    ],
    action: 'Send Email'
  },
  {
    icon: 'ri-time-line',
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 10:00 AM - 4:00 PM',
      'Sunday: Closed',
      'Emergency support available 24/7'
    ],
    action: 'Schedule Meeting'
  }
];

const socialLinks = [
  { icon: 'ri-linkedin-line', name: 'LinkedIn', url: '#' },
  { icon: 'ri-twitter-line', name: 'Twitter', url: '#' },
  { icon: 'ri-facebook-line', name: 'Facebook', url: '#' },
  { icon: 'ri-instagram-line', name: 'Instagram', url: '#' },
  { icon: 'ri-github-line', name: 'GitHub', url: '#' },
  { icon: 'ri-youtube-line', name: 'YouTube', url: '#' }
];

const ContactInfo = () => {
  return (
    <section className="contact-info section" id="contact-info">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="contact-info__header"
        >
          <h6 className="subtitle">Contact Information</h6>
          <h2>Get In Touch With Us</h2>
          <p className="section-description">
            We're here to help you bring your ideas to life. Reach out to us through 
            any of the following channels and we'll respond promptly.
          </p>
        </motion.div>

        <div className="contact-info__grid">
          {contactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="contact-info__card"
            >
              <div className="card__icon">
                <i className={item.icon}></i>
              </div>
              <div className="card__content">
                <h3 className="card__title">{item.title}</h3>
                <div className="card__details">
                  {item.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <button className="card__action">{item.action}</button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="contact-info__social"
        >
          <h3>Follow Us on Social Media</h3>
          <p>Stay updated with our latest projects and tech insights</p>
          <div className="social__links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="social__link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="contact-info__cta"
        >
          <div className="cta__content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss your requirements and create something amazing together.</p>
            <div className="cta__buttons">
              <button className="primary__btn">Schedule Free Consultation</button>
              <button className="secondary__btn">Download Our Portfolio</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
