import React from "react";
import "../../styles/about.css";
import Developer from "../../images/Developer.svg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, eveniet similique doloribus ipsum eos? ",
  },
  {
    icon: "ri-team-line",
    title: "Deadicated Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, eveniet similique doloribus ipsum eos? ",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Hours support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, eveniet similique doloribus ipsum eos? ",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <div className="about__content-wrapper">
              <h6 className="subtitle">Why choose us</h6>
              <h2>Specialist in aviding clients on</h2>
              <h2 className="highlight"> financial challenges</h2>
            </div>
            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div className="choose__us-content">
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={Developer} alt="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
