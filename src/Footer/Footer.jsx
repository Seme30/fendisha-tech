import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const light = 'rgb(26, 16, 77)'
const dark = 'rgb(169, 172, 216)'

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

const Footer = ({ theme }) => {
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
              Fendisha is a Digital Agency which Offers All in One IT-Related Services.
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
            <div className="social__icons">
              <a target="_blank" rel="noreferrer" href="https://www.t.me/fendishatech"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z" fill={theme==='light-theme'? light: dark}/></svg></a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fendishatech/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill={theme==='light-theme'? light: dark}/></svg></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fensihatech/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill={theme==='light-theme'? light: dark}/></svg></a>
            </div>
          </div>
        </div>

        <p className="copyright"> Copyright {year}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
