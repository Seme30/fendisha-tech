import React from 'react';
import { motion } from 'framer-motion';
import '../styles/appservices.css';

const servicesData = [
  {
    icon: 'ri-smartphone-line',
    title: 'Native iOS Development',
    description: 'Build high-performance iOS apps using Swift and Objective-C for optimal user experience.',
    features: ['Swift Programming', 'iOS SDK', 'App Store Optimization', 'Core Data Integration']
  },
  {
    icon: 'ri-android-line',
    title: 'Native Android Development',
    description: 'Create powerful Android applications using Kotlin and Java for maximum performance.',
    features: ['Kotlin Development', 'Android SDK', 'Google Play Store', 'Material Design']
  },
  {
    icon: 'ri-code-line',
    title: 'Cross-Platform Development',
    description: 'Develop apps that work seamlessly across multiple platforms with shared codebase.',
    features: ['React Native', 'Flutter', 'Xamarin', 'Code Reusability']
  },
  {
    icon: 'ri-cloud-line',
    title: 'Backend & API Development',
    description: 'Robust backend solutions and APIs to power your mobile applications.',
    features: ['RESTful APIs', 'GraphQL', 'Cloud Integration', 'Database Design']
  },
  {
    icon: 'ri-palette-line',
    title: 'UI/UX Design',
    description: 'Intuitive and engaging mobile app designs that provide excellent user experience.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    icon: 'ri-settings-line',
    title: 'App Maintenance & Support',
    description: 'Ongoing maintenance, updates, and support to keep your app running smoothly.',
    features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', '24/7 Support']
  }
];

const AppServices = () => {
  return (
    <section className="app-services section" id="services">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="services__header"
        >
          <h6 className="subtitle">Our Services</h6>
          <h2>Complete Mobile App Development Solutions</h2>
          <p className="section-description">
            From concept to deployment, we provide end-to-end mobile app development 
            services that bring your ideas to life.
          </p>
        </motion.div>

        <div className="services__grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service__card"
            >
              <div className="service__icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
              <ul className="service__features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="ri-check-line"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service__btn">Learn More</button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="services__cta"
        >
          <h3>Ready to Build Your Mobile App?</h3>
          <p>Let's discuss your app idea and turn it into a successful mobile application</p>
          <div className="cta__buttons">
            <button className="primary__btn">Start Your Project</button>
            <button className="secondary__btn">Get Free Consultation</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppServices;
