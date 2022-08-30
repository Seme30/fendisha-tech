import React from "react";
import "../styles/appdetail.css";
import phone from "../images/Iphone.svg";

const AppDetail = () => {
  return (
    <section className="section app__section">
      <div className="container">
        <div className="app__wrappers">
          <div className="app__content">
            <h6 className="subtitle">App Development</h6>
            <p className="description app__content-des">
              We create websites that automatically attract any business's
              target audience We have been providing businesses with
              user-centric designs that are both simple and appealing for years.
              Our designers team work hard to deliver websites that have top
              notch user-experience and can create amazing websites that are not
              only visually appealing but also easy to use for both website
              owner and visitors.
            </p>
          </div>
          <div className="app__detail">
            <div className="appdetail__content">
              <img src={phone} alt="app-img" />
              <button className="secondary__btn">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDetail;
