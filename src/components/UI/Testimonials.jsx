import React from "react";
import "../../styles/testimonials.css";
import Slider from "react-slick";
import img1 from "../../images/Me.png";
import img from '../../logo.svg'
import img2 from '../../images/ME now.png'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            {" "}
            Trusted by more than{" "}
            <span className="highlight">5,000 customers</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                minima vero, neque sint ipsa deleniti dolorum ullam harum
                sapiente eum laudantium reprehenderit voluptates earum sed
                fugiat aliquam at culpa sit.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Semahegn Adugna</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                minima vero, neque sint ipsa deleniti dolorum ullam harum
                sapiente eum laudantium reprehenderit voluptates earum sed
                fugiat aliquam at culpa sit.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={img2} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Abebe Beso</h5>
                  <p className="description">Sr, Product Designer</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                minima vero, neque sint ipsa deleniti dolorum ullam harum
                sapiente eum laudantium reprehenderit voluptates earum sed
                fugiat aliquam at culpa sit.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={img} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">React</h5>
                  <p className="description">Javascript Library</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
