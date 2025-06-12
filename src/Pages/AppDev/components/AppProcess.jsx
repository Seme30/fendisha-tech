import React from 'react';
import { motion } from 'framer-motion';
import '../styles/appprocess.css';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, target audience, and create a comprehensive app strategy.',
    icon: 'ri-search-line',
    features: ['Market Research', 'User Personas', 'Feature Planning', 'Technical Architecture']
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging designs that provide exceptional user experience.',
    icon: 'ri-palette-line',
    features: ['Wireframing', 'User Flow', 'Visual Design', 'Prototyping']
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build your app using the latest technologies and best development practices.',
    icon: 'ri-code-line',
    features: ['Native/Cross-platform', 'Backend Development', 'API Integration', 'Database Design']
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Comprehensive testing to ensure your app works flawlessly across all devices.',
    icon: 'ri-bug-line',
    features: ['Functional Testing', 'Performance Testing', 'Security Testing', 'Device Testing']
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Launch your app on app stores and ensure successful market entry.',
    icon: 'ri-rocket-line',
    features: ['App Store Submission', 'Play Store Submission', 'App Store Optimization', 'Launch Strategy']
  },
  {
    step: '06',
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and feature enhancements to keep your app competitive.',
    icon: 'ri-customer-service-line',
    features: ['Bug Fixes', 'Performance Optimization', 'Feature Updates', '24/7 Support']
  }
];

const AppProcess = () => {
  return (
    <section className="app-process section" id="process">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="process__header"
        >
          <h6 className="subtitle">Our Process</h6>
          <h2>How We Build Successful Mobile Apps</h2>
          <p className="section-description">
            Our proven app development process ensures high-quality results through 
            systematic planning, execution, and continuous improvement.
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
            <h3>Ready to Start Your App Development Journey?</h3>
            <p>Let's discuss your app idea and create a roadmap for success.</p>
            <div className="cta__buttons">
              <button className="primary__btn">Get Started</button>
              <button className="secondary__btn">Schedule Consultation</button>
            </div>
          </div>
          <div className="cta__stats">
            <div className="stat__item">
              <span className="stat__number">50+</span>
              <span className="stat__label">Apps Delivered</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">95%</span>
              <span className="stat__label">Success Rate</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">3</span>
              <span className="stat__label">Months Avg. Timeline</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppProcess;
