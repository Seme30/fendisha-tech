import React from "react";
import website from '../images/website.svg';
import '../styles/webintro.css'

const WebIntro = () => {
  return (
    <section className="section web__section">
      <div className="container">
        <h2 className="highlight web__title" > Web Design and Development</h2>
        <div className="web__wrapper">
        <div className="web__img">
            <img src={website} alt="website-img" />
          </div>
          <div className="web__content">
          <h6 className="subtitle">Web design</h6>
            <p className="description web__content-des">
              We create websites that automatically attract any business's
              target audience We have been providing businesses with
              user-centric designs that are both simple and appealing for years.
              Our designers team work hard to deliver websites that have top
              notch user-experience and can create amazing websites that are not
              only visually appealing but also easy to use for both website
              owner and visitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebIntro;
