import React from 'react';
import { motion } from 'framer-motion';
import '../styles/graphicsservices.css';

const servicesData = [
  {
    icon: 'ri-palette-line',
    title: 'Logo Design',
    description: 'Create memorable and impactful logos that represent your brand identity perfectly.',
    features: ['Custom Logo Design', 'Brand Guidelines', 'Multiple Formats', 'Unlimited Revisions']
  },
  {
    icon: 'ri-image-line',
    title: 'Brand Identity',
    description: 'Comprehensive branding solutions including color schemes, typography, and visual elements.',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Marketing Collateral']
  },
  {
    icon: 'ri-layout-line',
    title: 'Print Design',
    description: 'Professional print materials including brochures, flyers, business cards, and more.',
    features: ['Brochure Design', 'Business Cards', 'Flyers & Posters', 'Print-Ready Files']
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Digital Graphics',
    description: 'Eye-catching digital designs for websites, social media, and online marketing.',
    features: ['Social Media Graphics', 'Web Banners', 'Digital Ads', 'UI Elements']
  },
  {
    icon: 'ri-gift-line',
    title: 'Packaging Design',
    description: 'Attractive packaging designs that make your products stand out on shelves.',
    features: ['Product Packaging', 'Label Design', '3D Mockups', 'Print Specifications']
  },
  {
    icon: 'ri-presentation-line',
    title: 'Presentation Design',
    description: 'Professional presentation templates and custom slide designs for your business.',
    features: ['PowerPoint Templates', 'Custom Slides', 'Infographics', 'Interactive Elements']
  }
];

const GraphicsServices = () => {
  return (
    <section className="graphics-services" id="services">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="services__header"
        >
          <h6 className="subtitle">Our Services</h6>
          <h2>Complete Graphics Design Solutions</h2>
          <p className="section-description">
            From concept to completion, we provide comprehensive design services 
            that elevate your brand and engage your audience.
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
      </div>
    </section>
  );
};

export default GraphicsServices;
