import React from "react";
import "../../styles/testimonials.css";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Fendisha-tech Thank you for the work that you did. It was
                perfect for what I needed, in fact better than I had hoped for.
                But there is no question that nothing could prepare me for how
                impressed and happy I am with the final result! Thank you again
                for the excellent work.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <i class="ri-user-line"></i>
                </div>
                <div>
                  <h5 className="customer__name">Surafel</h5>
                  <p className="description">Customer</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Fendisha tech does a lovely work for us. the colors and the
                deignes were termedous. it translated our ideal design more and
                lively presented in a better. Fendisha played a key role in
                supporting our company's vision and develop a quite impressive
                website. thank you, it's pleasure working with you.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <i class="ri-user-line"></i>
                </div>
                <div>
                  <h5 className="customer__name">Befkir</h5>
                  <p className="description">Customer</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                I would like to thank you for the quick and efficient service.
                Your team did a great job on the graphics necessary for my
                website. I really appreciate your efforts. When I noticed some
                problems with the final product, your team was quick to address
                them.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <i class="ri-user-line"></i>
                </div>
                <div>
                  <h5 className="customer__name">Adam</h5>
                  <p className="description">Customer</p>
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
