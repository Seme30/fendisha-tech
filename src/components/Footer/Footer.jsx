import React from "react";
import "./footer.css";

const quicklinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];
const quicklinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
  {
    path: "#",
    display: "Guides",
  },
];

const quicklinks03 = [
  {
    path: "#",
    display: "About",
  },
  {
    path: "#",
    display: "Jobs",
  },
  {
    path: "#",
    display: "Blog",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Fendisha</h2>
            <p className="description">Grow with us</p>
            <p className="small__text description">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              officia porro aperiam repellendus? Dolorum enim neque eligendi
              sapiente quia nisi.
            </p>
          </div>
          <div className="footer__quick-links">
            <div className="quick__links-title">Solutions</div>
            <ul className="quick__links">
              {quicklinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}> {item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <div className="quick__links-title">Support</div>
            <ul className="quick__links">
              {quicklinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}> {item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <div className="quick__links-title">Company</div>
            <ul className="quick__links">
              {quicklinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}> {item.display}</a>
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
