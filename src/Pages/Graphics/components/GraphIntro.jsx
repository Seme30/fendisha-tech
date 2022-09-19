import React, { useEffect, useRef } from "react";
// import designer from "../images/Designer1.svg";
import "../styles/graphintro.css";
import lottie from "lottie-web";
import designer from "../../../anim/designer.json";
import { Link } from "react-router-dom";

const GraphIntro = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: designer,
    });
    return () => lottie.stop();
    // More logic goes here
  }, []);

  return (
    <section className="section graphics__section">
      <div className="container">
        <h2 className="highlight graphics__title"> Graphics Design</h2>
        <div className="graphics__wrapper">
          <div className="graphics__img">
            <div ref={anime}></div>
          </div>
          <div className="graphics__content">
            <h6 className="subtitle graphics_design">Graphics Design</h6>
            <p className="description graphics__content-des">
              Our Graphics Designers will help you to design the best possible
              Graphic for your business, making sure it will communicate all the
              right messages to your audience. Our team of experts ensures that
              every element of your Graphic is well researched and relevant, so
              we can deliver a professional end result for your business on time
              and on budget.
            </p>
            <br />
            <Link to="/contactus">
              <button className="secondary__btn graphics_btn">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphIntro;
