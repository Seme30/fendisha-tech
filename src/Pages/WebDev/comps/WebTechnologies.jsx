import React from 'react';
import { motion } from 'framer-motion';
import '../styles/webtechnologies.css';

const technologiesData = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: 'ri-reactjs-line', level: 95 },
      { name: 'Vue.js', icon: 'ri-vuejs-line', level: 90 },
      { name: 'Angular', icon: 'ri-angularjs-line', level: 85 },
      { name: 'JavaScript', icon: 'ri-javascript-line', level: 98 },
      { name: 'TypeScript', icon: 'ri-code-line', level: 90 },
      { name: 'HTML5', icon: 'ri-html5-line', level: 98 }
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: 'ri-nodejs-line', level: 92 },
      { name: 'Python', icon: 'ri-code-s-slash-line', level: 88 },
      { name: 'PHP', icon: 'ri-code-line', level: 85 },
      { name: 'Express.js', icon: 'ri-server-line', level: 90 },
      { name: 'Django', icon: 'ri-database-line', level: 82 },
      { name: 'Laravel', icon: 'ri-code-box-line', level: 80 }
    ]
  },
  {
    category: 'Database',
    technologies: [
      { name: 'MongoDB', icon: 'ri-database-2-line', level: 90 },
      { name: 'PostgreSQL', icon: 'ri-database-line', level: 88 },
      { name: 'MySQL', icon: 'ri-database-fill', level: 92 },
      { name: 'Redis', icon: 'ri-stack-line', level: 85 },
      { name: 'Firebase', icon: 'ri-fire-line', level: 88 },
      { name: 'Supabase', icon: 'ri-cloud-line', level: 85 }
    ]
  },
  {
    category: 'Tools & Others',
    technologies: [
      { name: 'Git', icon: 'ri-git-branch-line', level: 95 },
      { name: 'Docker', icon: 'ri-container-line', level: 85 },
      { name: 'AWS', icon: 'ri-cloud-line', level: 80 },
      { name: 'Figma', icon: 'ri-pencil-ruler-line', level: 90 },
      { name: 'Webpack', icon: 'ri-settings-3-line', level: 85 },
      { name: 'Vite', icon: 'ri-flashlight-line', level: 88 }
    ]
  }
];

const WebTechnologies = () => {
  return (
    <section className="web-technologies" id="technologies">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="technologies__header"
        >
          <h6 className="subtitle">Technologies</h6>
          <h2>Our Tech Stack</h2>
          <p className="section-description">
            We use cutting-edge technologies and frameworks to build robust, 
            scalable, and high-performance web applications.
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
          <h3>Ready to Build Something Amazing?</h3>
          <p>Let's discuss your project and choose the perfect tech stack for your needs.</p>
          <div className="cta__buttons">
            <button className="primary__btn">Start Your Project</button>
            <button className="secondary__btn">View Our Work</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebTechnologies;
