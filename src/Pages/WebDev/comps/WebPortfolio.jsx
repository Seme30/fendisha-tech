import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/webportfolio.css';

const portfolioData = [
  {
    id: 1,
    category: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/api/placeholder/400/300',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    category: 'saas',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for business intelligence',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
    image: '/api/placeholder/400/300',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    category: 'portfolio',
    title: 'Creative Portfolio',
    description: 'Portfolio website for creative professionals',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'Sanity'],
    image: '/api/placeholder/400/300',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    category: 'webapp',
    title: 'Task Management App',
    description: 'Collaborative task management platform',
    technologies: ['React', 'Firebase', 'Material-UI', 'PWA'],
    image: '/api/placeholder/400/300',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    category: 'ecommerce',
    title: 'Fashion Store',
    description: 'Luxury fashion e-commerce platform',
    technologies: ['Angular', 'NestJS', 'MySQL', 'PayPal'],
    image: '/api/placeholder/400/300',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    category: 'saas',
    title: 'CRM System',
    description: 'Customer relationship management system',
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
    image: '/api/placeholder/400/300',
    liveUrl: '#',
    githubUrl: '#'
  }
];

const categories = ['all', 'ecommerce', 'saas', 'portfolio', 'webapp'];

const WebPortfolio = () => {
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
    <section className="web-portfolio" id="portfolio">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="portfolio__header"
        >
          <h6 className="subtitle">Our Work</h6>
          <h2>Web Development Portfolio</h2>
          <p className="section-description">
            Explore our diverse collection of web applications and websites that showcase 
            our expertise in modern web development.
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
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
                  <i className="ri-code-line"></i>
                  <span>Web Project</span>
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
                      <a href={item.liveUrl} className="action__btn live">
                        <i className="ri-external-link-line"></i>
                        Live Demo
                      </a>
                      <a href={item.githubUrl} className="action__btn github">
                        <i className="ri-github-line"></i>
                        Code
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
          <h3>Have a Project in Mind?</h3>
          <p>Let's bring your web development ideas to life with cutting-edge technology</p>
          <button className="primary__btn">Start Your Project</button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebPortfolio;
