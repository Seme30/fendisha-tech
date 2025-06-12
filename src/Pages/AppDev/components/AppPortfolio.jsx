import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/appportfolio.css';

const portfolioData = [
  {
    id: 1,
    category: 'ios',
    title: 'Fitness Tracker App',
    description: 'Native iOS fitness tracking app with health integration',
    technologies: ['Swift', 'HealthKit', 'Core Data', 'CloudKit'],
    image: '/api/placeholder/400/300',
    appStore: '#',
    playStore: '#'
  },
  {
    id: 2,
    category: 'android',
    title: 'Food Delivery App',
    description: 'Android food delivery platform with real-time tracking',
    technologies: ['Kotlin', 'Firebase', 'Google Maps', 'Material Design'],
    image: '/api/placeholder/400/300',
    appStore: '#',
    playStore: '#'
  },
  {
    id: 3,
    category: 'crossplatform',
    title: 'Social Media App',
    description: 'Cross-platform social networking application',
    technologies: ['React Native', 'Redux', 'Socket.io', 'AWS'],
    image: '/api/placeholder/400/300',
    appStore: '#',
    playStore: '#'
  },
  {
    id: 4,
    category: 'ios',
    title: 'Banking App',
    description: 'Secure iOS banking application with biometric auth',
    technologies: ['Swift', 'TouchID', 'FaceID', 'Keychain'],
    image: '/api/placeholder/400/300',
    appStore: '#',
    playStore: '#'
  },
  {
    id: 5,
    category: 'crossplatform',
    title: 'E-learning Platform',
    description: 'Educational app with video streaming and quizzes',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Video Player'],
    image: '/api/placeholder/400/300',
    appStore: '#',
    playStore: '#'
  },
  {
    id: 6,
    category: 'android',
    title: 'Travel Companion',
    description: 'Android travel app with offline maps and guides',
    technologies: ['Kotlin', 'Room', 'Maps SDK', 'Retrofit'],
    image: '/api/placeholder/400/300',
    appStore: '#',
    playStore: '#'
  }
];

const categories = ['all', 'ios', 'android', 'crossplatform'];

const AppPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioData);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(portfolioData.filter(item => item.category === category));
    }
  };

  return (
    <section className="app-portfolio section" id="portfolio">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="portfolio__header"
        >
          <h6 className="subtitle">Our Apps</h6>
          <h2>Mobile App Portfolio</h2>
          <p className="section-description">
            Discover our collection of successful mobile applications across different 
            platforms and industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="portfolio__filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter__btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === 'crossplatform' ? 'Cross-Platform' : 
               category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="portfolio__grid">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio__item"
            >
              <div className="portfolio__image">
                <div className="placeholder-image">
                  <i className="ri-smartphone-line"></i>
                  <span>Mobile App</span>
                </div>
                <div className="portfolio__overlay">
                  <div className="portfolio__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="portfolio__technologies">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="portfolio__actions">
                      <a href={item.appStore} className="action__btn app-store">
                        <i className="ri-apple-line"></i>
                        App Store
                      </a>
                      <a href={item.playStore} className="action__btn play-store">
                        <i className="ri-google-play-line"></i>
                        Play Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="portfolio__cta"
        >
          <h3>Ready to Build Your Mobile App?</h3>
          <p>Transform your app idea into a successful mobile application</p>
          <button className="primary__btn">Start Your App Project</button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPortfolio;
