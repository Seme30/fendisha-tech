import React from 'react';
import { motion } from 'framer-motion';
import '../styles/appfeatures.css';

const featuresData = [
  {
    icon: 'ri-smartphone-line',
    title: 'Responsive Design',
    description: 'Apps that work flawlessly across all screen sizes and orientations.',
    benefits: ['Adaptive Layouts', 'Touch Optimization', 'Cross-Device Compatibility']
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Security First',
    description: 'Built-in security measures to protect user data and app integrity.',
    benefits: ['Data Encryption', 'Secure Authentication', 'Privacy Protection']
  },
  {
    icon: 'ri-speed-line',
    title: 'High Performance',
    description: 'Optimized for speed and efficiency with smooth user interactions.',
    benefits: ['Fast Loading', 'Smooth Animations', 'Memory Optimization']
  },
  {
    icon: 'ri-cloud-line',
    title: 'Cloud Integration',
    description: 'Seamless cloud connectivity for data sync and backup.',
    benefits: ['Real-time Sync', 'Offline Support', 'Scalable Storage']
  },
  {
    icon: 'ri-notification-line',
    title: 'Push Notifications',
    description: 'Engage users with timely and relevant push notifications.',
    benefits: ['Targeted Messaging', 'Rich Media', 'Analytics Tracking']
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics to understand user behavior and app performance.',
    benefits: ['User Analytics', 'Performance Metrics', 'Custom Reports']
  }
];

const AppFeatures = () => {
  return (
    <section className="app-features section" id="features">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="features__header"
        >
          <h6 className="subtitle">App Features</h6>
          <h2>Powerful Features for Modern Apps</h2>
          <p className="section-description">
            We build apps with cutting-edge features that provide exceptional user 
            experiences and drive business growth.
          </p>
        </motion.div>

        <div className="features__grid">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="feature__card"
            >
              <div className="feature__icon">
                <i className={feature.icon}></i>
              </div>
              <div className="feature__content">
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__description">{feature.description}</p>
                <ul className="feature__benefits">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <i className="ri-check-line"></i>
                      {benefit}
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
          className="features__showcase"
        >
          <div className="showcase__content">
            <h3>Why Choose Our App Development?</h3>
            <div className="showcase__stats">
              <div className="stat__item">
                <span className="stat__number">99.9%</span>
                <span className="stat__label">Uptime</span>
              </div>
              <div className="stat__item">
                <span className="stat__number">50ms</span>
                <span className="stat__label">Response Time</span>
              </div>
              <div className="stat__item">
                <span className="stat__number">256-bit</span>
                <span className="stat__label">Encryption</span>
              </div>
              <div className="stat__item">
                <span className="stat__number">24/7</span>
                <span className="stat__label">Support</span>
              </div>
            </div>
          </div>
          <div className="showcase__features">
            <div className="showcase__feature">
              <i className="ri-rocket-line"></i>
              <div>
                <h4>Fast Development</h4>
                <p>Rapid prototyping and agile development methodology</p>
              </div>
            </div>
            <div className="showcase__feature">
              <i className="ri-team-line"></i>
              <div>
                <h4>Expert Team</h4>
                <p>Experienced developers and designers</p>
              </div>
            </div>
            <div className="showcase__feature">
              <i className="ri-customer-service-line"></i>
              <div>
                <h4>Ongoing Support</h4>
                <p>Continuous maintenance and updates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeatures;
