import React from "react";
import "../../styles/newsletter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="container" id='news__container'>
        <div className="newsletter__wrapper">
          <div className="news__content">
            <h6 className="subtitle">Lets' work</h6>
            <h2>
              Explore the {" "}
               <span className="highlight">hidden</span>
               {" "}ideas and Subscribe!
            </h2>
          </div>
          <div className="newsletter__form">
            <input type="email" placeholder="Email"/>
            <button className="secondary__btn subscribe__btn">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
