import React from "react";
import "../styles/webdetail.css";
import img1 from '../images/jscode.svg'
import content from '../images/Content.svg'
import landing from '../images/Landing_Page.svg'
import apis from '../images/api.svg'


const webDetail = [
  {
    imgUrl: content,
    title: "CMS",
    desc: "If you are in need of content management system with wordpress or drupal, you are in the right place",
  },
  {
    imgUrl: landing,
    title: "Landing page",
    desc: "If you are in need of a landing page to be designed for your website, you are on the right spot, we will deliver you with the code in no time",
  },
  {
    imgUrl: img1,
    title: "E-commerce",
    desc: "If you are in need of an e-commerce website with your own requirements, you can contact us with the link below",
  },
  {
    imgUrl: apis,
    title: "Third-Party Api integration",
    desc: "If you wish to integrate your system with other third party services, you are in the right place",
  },
];

const WebDetail = () => {
  return (
    <section className="section web__section">
      <div className="container">
        <div className="webdetail__wrapper">
          {webDetail.map((item, index) => (
            <div className="webdetail__content" key={index}>
              <img src={item.imgUrl} alt="img" />
              <h6 className="subtitle">{item.title}</h6>
              <p className="description webdetial__content-des">{item.desc}</p>
              <button className="secondary__btn">Contact us</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDetail;
