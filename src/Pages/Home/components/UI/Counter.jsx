import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../../styles/counter.css";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={counterRef}>{count}</span>;
};

const Counter = () => {
  const counterData = [
    {
      number: 18,
      text: "Clients",
      icon: "ri-user-line"
    },
    {
      number: 9,
      text: "Running Projects",
      icon: "ri-settings-line"
    },
    {
      number: 15,
      text: "Projects Complete",
      icon: "ri-check-line"
    },
  ];


  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0.7 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="counter__item"
            >
              <div className="counter__icon">
                <i className={item.icon}></i>
              </div>
              <div className="counter__number">
                <AnimatedCounter end={item.number} />
                <span>+</span>
              </div>
              <div className="counter__title">{item.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
