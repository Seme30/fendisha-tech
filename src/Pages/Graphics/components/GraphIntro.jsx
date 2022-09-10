import React from "react";
import designer from "../images/Designer1.svg";
import "../styles/graphintro.css";

const GraphIntro = () => {
  return (
    <section className="section graphics__section">
      <div className="container">
        <h2 className="highlight graphics__title"> Graphics Design</h2>
        <div className="graphics__wrapper">
          <div className="graphics__img">
            <img src={designer} alt="" />
          </div>
          <div className="graphics__content">
            <h6 className="subtitle graphics_design">Graphics Design</h6>
            <p className="description graphics__content-des">
              We create websites that automatically attract any business's
              target audience We have been providing businesses with
              user-centric designs that are both simple and appealing for years.
              Our designers team work hard to deliver websites that have top
              notch user-experience and can create amazing websites that are not
              only visually appealing but also easy to use for both website
              owner and visitors.
            </p>
            <br />
            <button className="secondary__btn graphics_btn">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphIntro;
