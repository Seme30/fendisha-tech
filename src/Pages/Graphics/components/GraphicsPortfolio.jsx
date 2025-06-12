import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/graphicsportfolio.css';

const portfolioData = [
  {
    id: 1,
    category: 'logo',
    title: 'Tech Startup Logo',
    description: 'Modern logo design for a technology startup',
    image: '/api/placeholder/400/300',
    tags: ['Logo', 'Branding', 'Tech']
  },
  {
    id: 2,
    category: 'branding',
    title: 'Restaurant Brand Identity',
    description: 'Complete branding package for a fine dining restaurant',
    image: '/api/placeholder/400/300',
    tags: ['Branding', 'Restaurant', 'Identity']
  },
  {
    id: 3,
    category: 'print',
    title: 'Corporate Brochure',
    description: 'Professional brochure design for corporate clients',
    image: '/api/placeholder/400/300',
    tags: ['Print', 'Brochure', 'Corporate']
  },
  {
    id: 4,
    category: 'digital',
    title: 'Social Media Campaign',
    description: 'Engaging social media graphics for marketing campaign',
    image: '/api/placeholder/400/300',
    tags: ['Digital', 'Social Media', 'Marketing']
  },
  {
    id: 5,
    category: 'logo',
    title: 'Fashion Brand Logo',
    description: 'Elegant logo design for fashion brand',
    image: '/api/placeholder/400/300',
    tags: ['Logo', 'Fashion', 'Elegant']
  },
  {
    id: 6,
    category: 'packaging',
    title: 'Product Packaging',
    description: 'Creative packaging design for consumer products',
    image: '/api/placeholder/400/300',
    tags: ['Packaging', 'Product', 'Creative']
  }
];

const categories = ['all', 'logo', 'branding', 'print', 'digital', 'packaging'];

const GraphicsPortfolio = () => {
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
    <section className="graphics-portfolio" id="portfolio">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="portfolio__header"
        >
          <h6 className="subtitle">Our Work</h6>
          <h2>Creative Portfolio</h2>
          <p className="section-description">
            Explore our diverse collection of design projects that showcase our creativity and expertise.
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
                  <i className="ri-image-line"></i>
                  <span>Portfolio Image</span>
                </div>
                <div className="portfolio__overlay">
                  <div className="portfolio__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="portfolio__tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                    <button className="view__btn">
                      <i className="ri-eye-line"></i>
                      View Project
                    </button>
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
          <h3>Ready to Start Your Project?</h3>
          <p>Let's create something amazing together</p>
          <button className="primary__btn">Get Started Today</button>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicsPortfolio;
