import React from 'react';
import { motion } from 'framer-motion';
import '../styles/webprocess.css';

const processSteps = [
  {
    step: '01',
    title: 'Planning & Strategy',
    description: 'We analyze your requirements, define project scope, and create a comprehensive development strategy.',
    icon: 'ri-lightbulb-line',
    features: ['Requirements Analysis', 'Technical Planning', 'Architecture Design', 'Timeline Creation']
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive and engaging user interfaces that provide excellent user experience.',
    icon: 'ri-palette-line',
    features: ['Wireframing', 'Prototyping', 'Visual Design', 'User Testing']
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build your application using modern technologies and best practices for optimal performance.',
    icon: 'ri-code-line',
    features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration']
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Comprehensive testing ensures your application works flawlessly across all devices and browsers.',
    icon: 'ri-bug-line',
    features: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Security Testing']
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'We deploy your application to production and provide ongoing support and maintenance.',
    icon: 'ri-rocket-line',
    features: ['Production Deployment', 'Performance Monitoring', 'Security Setup', 'Backup Configuration']
  },
  {
    step: '06',
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your application running smoothly.',
    icon: 'ri-customer-service-line',
    features: ['24/7 Support', 'Regular Updates', 'Performance Optimization', 'Security Patches']
  }
];

const WebProcess = () => {
  return (
    <section className="web-process" id="process">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="process__header"
        >
          <h6 className="subtitle">Our Process</h6>
          <h2>How We Build Amazing Web Applications</h2>
          <p className="section-description">
            Our proven development process ensures high-quality results through systematic 
            planning, execution, and continuous improvement.
          </p>
        </motion.div>

        <div className="process__grid">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="process__step"
            >
              <div className="step__header">
                <div className="step__number">{step.step}</div>
                <div className="step__icon">
                  <i className={step.icon}></i>
                </div>
              </div>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
                <ul className="step__features">
                  {step.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="ri-check-line"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="process__cta"
        >
          <div className="cta__content">
            <h3>Ready to Start Your Web Development Journey?</h3>
            <p>Let's discuss your project requirements and create something extraordinary together.</p>
            <div className="cta__buttons">
              <button className="primary__btn">Get Started</button>
              <button className="secondary__btn">Schedule Consultation</button>
            </div>
          </div>
          <div className="cta__stats">
            <div className="stat__item">
              <span className="stat__number">200+</span>
              <span className="stat__label">Projects Delivered</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">99%</span>
              <span className="stat__label">Client Satisfaction</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">5+</span>
              <span className="stat__label">Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebProcess;
