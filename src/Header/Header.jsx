import React, {useRef, useEffect, useState} from "react";
import Logo from '../images/logo.png'
import Logolight from '../images/Fendisha-light.png'
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";
import MobileNav from "./MobileNav";
import "./header.css";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#",
    display: "Services",
  },
  {
    path: "/contactus",
    display: "Contact",
  },
];


const Header = ({ theme, toggleTheme }) => {

  const headerRef = useRef(null)
  const [dropdown, setDropdown] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const headerFunc = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop> 80){
      headerRef.current.classList.add('header__shrink')
    } else {
      headerRef.current.classList.remove('header__shrink')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', headerFunc)
    return ()=> window.removeEventListener('scroll', headerFunc)
  }, [])
  

  // const handleClick = e => {
  //   e.preventDefault()

  //   const targetAttr = e.target.getAttribute('href')

  //   const location = document.querySelector(targetAttr).offsetTop;

  //   window.scrollTo({
  //     left:0,
  //     top: location-80
  //   })
  // }

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  }

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  }
  

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* logo */}
          <Link to='/' className="logo-link">
          <div className="logo">
           
            <img src={ theme==='light-theme'? Logolight: Logo} alt ='logo'>
            
            </img>
            
          </div>
          </Link>

          {/* navigation */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => {
                if (item.display === "Services") {
                  return (
                    <li
                      className="menu__item dropdown-container"
                      key={index}
                      onMouseEnter={() => setDropdown(true)}
                      onMouseLeave={() => setDropdown(false)}
                    >
                      <span className="menu__link">{item.display}</span>
                      {dropdown && <Dropdown />}
                    </li>
                  );
                }
                return (
                  <li className="menu__item" key={index}>
                    <Link to={item.path} className="menu__link">
                      {item.display}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* light mode */}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i class="ri-moon-line"></i>Dark
                </span>
              ) : (
                <span>
                  <i class="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>

          <span className="mobile__menu" onClick={toggleMobileNav}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={closeMobileNav}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </header>
  );
};

export default Header;
