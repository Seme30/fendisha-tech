import React from 'react';
import { motion } from 'framer-motion';
import '../styles/apptechnologies.css';

const technologiesData = [
  {
    category: 'Native iOS',
    technologies: [
      { name: 'Swift', icon: 'ri-apple-line', level: 95 },
      { name: 'Objective-C', icon: 'ri-code-line', level: 85 },
      { name: 'Xcode', icon: 'ri-tools-line', level: 92 },
      { name: 'Core Data', icon: 'ri-database-line', level: 88 },
      { name: 'UIKit', icon: 'ri-layout-line', level: 90 },
      { name: 'SwiftUI', icon: 'ri-smartphone-line', level: 85 }
    ]
  },
  {
    category: 'Native Android',
    technologies: [
      { name: 'Kotlin', icon: 'ri-android-line', level: 92 },
      { name: 'Java', icon: 'ri-code-s-slash-line', level: 88 },
      { name: 'Android Studio', icon: 'ri-tools-line', level: 90 },
      { name: 'Room Database', icon: 'ri-database-line', level: 85 },
      { name: 'Jetpack Compose', icon: 'ri-layout-line', level: 80 },
      { name: 'Material Design', icon: 'ri-palette-line', level: 92 }
    ]
  },
  {
    category: 'Cross-Platform',
    technologies: [
      { name: 'React Native', icon: 'ri-reactjs-line', level: 90 },
      { name: 'Flutter', icon: 'ri-flutter-line', level: 88 },
      { name: 'Xamarin', icon: 'ri-microsoft-line', level: 75 },
      { name: 'Ionic', icon: 'ri-smartphone-line', level: 80 },
      { name: 'Cordova', icon: 'ri-code-line', level: 70 },
      { name: 'Unity', icon: 'ri-gamepad-line', level: 85 }
    ]
  },
  {
    category: 'Backend & Cloud',
    technologies: [
      { name: 'Firebase', icon: 'ri-fire-line', level: 92 },
      { name: 'AWS', icon: 'ri-cloud-line', level: 85 },
      { name: 'Node.js', icon: 'ri-nodejs-line', level: 88 },
      { name: 'MongoDB', icon: 'ri-database-2-line', level: 90 },
      { name: 'GraphQL', icon: 'ri-code-line', level: 82 },
      { name: 'Docker', icon: 'ri-container-line', level: 80 }
    ]
  }
];

const AppTechnologies = () => {
  return (
    <section className="app-technologies section" id="technologies">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="technologies__header"
        >
          <h6 className="subtitle">Technologies</h6>
          <h2>Our Mobile Development Stack</h2>
          <p className="section-description">
            We leverage the latest technologies and frameworks to build high-performance, 
            scalable mobile applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="technologies__grid">
          {technologiesData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="tech__category"
            >
              <h3 className="category__title">{category.category}</h3>
              <div className="tech__list">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    className="tech__item"
                  >
                    <div className="tech__icon">
                      <i className={tech.icon}></i>
                    </div>
                    <div className="tech__info">
                      <h4 className="tech__name">{tech.name}</h4>
                      <div className="tech__progress">
                        <div className="progress__bar">
                          <motion.div
                            className="progress__fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          ></motion.div>
                        </div>
                        <span className="progress__percentage">{tech.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="technologies__cta"
        >
          <h3>Need a Custom Technology Solution?</h3>
          <p>We adapt our tech stack to meet your specific project requirements and goals.</p>
          <div className="cta__buttons">
            <button className="primary__btn">Discuss Your Project</button>
            <button className="secondary__btn">View Case Studies</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppTechnologies;
