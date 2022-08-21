import React from "react";
import front from "../../images/front.svg";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero__section" id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2> We Provide Perfect</h2>
              <h2> Service To Create Digital </h2>
              <h2> Presence for your buisness</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              expedita vel totam. Culpa, fasilis iusto
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Contact Us Now</button>
            </div>
          </div>
          <div className="hero__img__wrapper">
            <div className="hero__img">
              <img src={front} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;