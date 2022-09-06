import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const quicklinks01 = [
  {
    path: "/appdevelopment",
    display: "App Development",
  },
  {
    path: "/webdevelopment",
    display: "Web Design",
  },
  {
    path: "/graphicsdesign",
    display: "Graphics Design",
  },
];
const quicklinks02 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/abouts",
    display: "About Us",
  },
  {
    path: "/contactus",
    display: "Contact us",
  },
];

const quicklinks03 = [
  {
    display: "Addis Ababa, Ethiopia",
  },
  {
    display: "+251949624951",
  },
  {
    display: "info@fendishatech.com",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Fendisha</h2>
            <p className="description">Grow with us</p>
            <p className="small__text description">
              {" "}
              Fendisha is an Ethiopian-based Professional IT Solution and
              Digital Marketing Company. Which Offers All IT-Related Services
              Website Design | Mobile App Development | Graphic Design | and
              Other IT-Related Services
            </p>
          </div>
          <div className="footer__quick-links">
            <div className="quick__links-title">Services</div>
            <ul className="quick__links">
              {quicklinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <Link to={item.path}> {item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <div className="quick__links-title">Quick Links</div>
            <ul className="quick__links">
              {quicklinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <Link to={item.path}> {item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <div className="quick__links-title">Contact</div>
            <ul className="quick__link">
              {quicklinks03.map((item, index) => (
                <li className="quick__link-i" key={index}>
                  <label> {item.display}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright"> Copyright {year}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
