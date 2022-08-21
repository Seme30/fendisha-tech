import React from "react";
import { Link } from "react-router-dom";
import "../../styles/services.css";

const serviceData = [
  {
    path: "appdevelopment",
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet repellendus at, hic voluptas nulla iste ut qui voluptatem voluptate!",
  },
  {
    path: "webdevelopment",
    icon: "ri-code-s-slash-line",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet repellendus at, hic voluptas nulla iste ut qui voluptatem voluptate!",
  },
  {
    path: "graphics",
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet repellendus at, hic voluptas nulla iste ut qui voluptatem voluptate!",
  },
  {
    path: "digital",
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet repellendus at, hic voluptas nulla iste ut qui voluptatem voluptate!",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight"> our best services</h2>
        </div>

        <div className="service__item_wrapper">
          {serviceData.map((item, index) => (
            <div className="service__item" key={index}>
              <Link to={item.path}>
                <span className="service__icon">
                  <i class={item.icon}></i>
                </span>
                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
