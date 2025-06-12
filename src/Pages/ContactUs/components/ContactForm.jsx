import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/contactform.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Graphics Design',
    'UI/UX Design',
    'E-commerce Development',
    'Custom Software',
    'Other'
  ];

  const budgets = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s Discuss'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="contact-form section">
        <div className="container">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="success-message"
          >
            <i className="ri-check-double-line"></i>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
            <button 
              className="primary__btn"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form section" id="contact-form">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="form__header"
        >
          <h6 className="subtitle">Contact Form</h6>
          <h2>Let's Start a Conversation</h2>
          <p className="section-description">
            Fill out the form below and we'll get back to you with a detailed proposal 
            tailored to your specific needs.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="contact__form"
        >
          <div className="form__grid">
            <div className="form__group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form__group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form__group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form__group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
              />
            </div>

            <div className="form__group">
              <label htmlFor="service">Service Needed *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={errors.service ? 'error' : ''}
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <span className="error-message">{errors.service}</span>}
            </div>

            <div className="form__group">
              <label htmlFor="budget">Project Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget range</option>
                {budgets.map((budget, index) => (
                  <option key={index} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="timeline">Project Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Select timeline</option>
                {timelines.map((timeline, index) => (
                  <option key={index} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form__group full-width">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Tell us about your project requirements, goals, and any specific features you need..."
              rows="6"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <div className="form__submit">
            <button
              type="submit"
              className="primary__btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line spinning"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="ri-send-plane-line"></i>
                  Send Message
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
