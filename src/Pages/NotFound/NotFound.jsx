import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './notfound.css';

const NotFound = () => {
  return (
    <section className="not-found section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="not-found__content"
        >
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page Not Found</h2>
          <p className="not-found__description">
            Oops! The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/" className="not-found__button">
            <button className="primary__btn">Back to Home</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound; 