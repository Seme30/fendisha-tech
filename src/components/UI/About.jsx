import React from "react";
import "../../styles/about.css";
import AboutImg from "../../images/ME now.png";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, eveniet similique doloribus ipsum eos? Rerum excepturi quam similique neque id provident, nam accusamus doloremque laboriosam quo exercitationem accusantium dolorum.",
  },
  {
    icon: "ri-team-line",
    title: "Deadicated Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, eveniet similique doloribus ipsum eos? Rerum excepturi quam similique neque id provident, nam accusamus doloremque laboriosam quo exercitationem accusantium dolorum.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Hours support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, eveniet similique doloribus ipsum eos? Rerum excepturi quam similique neque id provident, nam accusamus doloremque laboriosam quo exercitationem accusantium dolorum.",
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
              <p className="description about__content-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi doloribus quae laborum debitis minus. Facere tenetur
                nemo nesciunt esse voluptas. Praesentium earum facere assumenda
                iure dolore necessitatibus voluptatem, mollitia quibusdam?
              </p>
            </div>
            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item">
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={AboutImg} alt="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
