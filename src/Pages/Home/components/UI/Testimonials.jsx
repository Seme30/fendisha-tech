import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/testimonials.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Fendisha-tech Thank you for the work that you did. It was perfect for what I needed, in fact better than I had hoped for. But there is no question that nothing could prepare me for how impressed and happy I am with the final result! Thank you again for the excellent work.",
      name: "Surafel",
      role: "Customer"
    },
    {
      id: 2,
      text: "Fendisha tech does a lovely work for us. the colors and the deignes were termedous. it translated our ideal design more and lively presented in a better. Fendisha played a key role in supporting our company's vision and develop a quite impressive website. thank you, it's pleasure working with you.",
      name: "Befkir",
      role: "Customer"
    },
    {
      id: 3,
      text: "I would like to thank you for the quick and efficient service. Your team did a great job on the graphics necessary for my website. I really appreciate your efforts. When I noticed some problems with the final product, your team was quick to address them.",
      name: "Adam",
      role: "Customer"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
        </div>

        <div className="slider__wrapper">
          <div className="testimonial-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="slider__item"
              >
                <p className="description">
                  {testimonials[currentSlide].text}
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <i className="ri-user-line"></i>
                  </div>
                  <div>
                    <h5 className="customer__name">{testimonials[currentSlide].name}</h5>
                    <p className="description">{testimonials[currentSlide].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="carousel-controls">
              <button
                onClick={prevSlide}
                className="carousel-btn prev"
                aria-label="Previous testimonial"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                onClick={nextSlide}
                className="carousel-btn next"
                aria-label="Next testimonial"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
