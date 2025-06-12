import React from 'react';
import { motion } from 'framer-motion';
import '../styles/graphicsprocess.css';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Research',
    description: 'We start by understanding your brand, target audience, and project goals through detailed consultation.',
    icon: 'ri-search-line',
    features: ['Brand Analysis', 'Market Research', 'Competitor Study', 'Goal Setting']
  },
  {
    step: '02',
    title: 'Concept Development',
    description: 'Our creative team develops initial concepts and design directions based on your requirements.',
    icon: 'ri-lightbulb-line',
    features: ['Brainstorming', 'Mood Boards', 'Style Exploration', 'Concept Sketches']
  },
  {
    step: '03',
    title: 'Design Creation',
    description: 'We bring the approved concepts to life with detailed design work and professional execution.',
    icon: 'ri-palette-line',
    features: ['Design Execution', 'Color Selection', 'Typography', 'Visual Elements']
  },
  {
    step: '04',
    title: 'Review & Refinement',
    description: 'We present the designs for your feedback and make necessary revisions to perfect the final output.',
    icon: 'ri-edit-line',
    features: ['Client Review', 'Feedback Integration', 'Revisions', 'Quality Check']
  },
  {
    step: '05',
    title: 'Final Delivery',
    description: 'We deliver all final files in required formats along with brand guidelines and usage instructions.',
    icon: 'ri-download-line',
    features: ['File Preparation', 'Format Delivery', 'Brand Guidelines', 'Support Documentation']
  }
];

const GraphicsProcess = () => {
  return (
    <section className="graphics-process" id="process">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="process__header"
        >
          <h6 className="subtitle">Our Process</h6>
          <h2>How We Create Amazing Designs</h2>
          <p className="section-description">
            Our proven design process ensures exceptional results through collaboration, 
            creativity, and attention to detail at every step.
          </p>
        </motion.div>

        <div className="process__timeline">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="process__step"
            >
              <div className="step__content">
                <div className="step__header">
                  <div className="step__icon">
                    <i className={step.icon}></i>
                  </div>
                  <div className="step__info">
                    <span className="step__number">{step.step}</span>
                    <h3 className="step__title">{step.title}</h3>
                  </div>
                </div>
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
              <div className="step__connector"></div>
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
            <h3>Ready to Start Your Design Journey?</h3>
            <p>Let's discuss your project and create something extraordinary together.</p>
            <div className="cta__buttons">
              <button className="primary__btn">Start Your Project</button>
              <button className="secondary__btn">Schedule Consultation</button>
            </div>
          </div>
          <div className="cta__stats">
            <div className="stat__item">
              <span className="stat__number">150+</span>
              <span className="stat__label">Projects Completed</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">98%</span>
              <span className="stat__label">Client Satisfaction</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">24h</span>
              <span className="stat__label">Average Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicsProcess;
