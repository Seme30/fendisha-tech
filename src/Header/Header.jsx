import React, {useRef, useEffect, useState} from "react";
import Logo from '../Pages/Home/images/logo.png'
import Logolight from '../Pages/Home/images/Fendisha-light.png'
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";
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
    path: "/abouts",
    display: "About",
  },
  {
    path: "/contactus",
    display: "Contact",
  },
];


const Header = ({ theme, toggleTheme }) => {

  const headerRef = useRef(null)
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);

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

  const toggleMenu = ()=> {
    const navLinks = document.querySelectorAll('.menu__item')
    const nav = document.querySelector('.navigation')

    nav.classList.toggle('nav-active')
    setOpen(!open)
      navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ``
      } else{
        link.style.animation = `navLinkFade 0.5s ease-in forwards ${index/7 + 0.2}s` 
      }
    })

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
                    className="menu__item"
                      key={index}
                      onClick={() => setDropdown(!dropdown)}
                      // onMouseEnter={() => setDropdown(true)}
                      onMouseLeave={()=>setDropdown(false)}
                    >
                      <Link to={item.path} className="menu__link">{item.display}</Link>
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
              }
              )}
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

          <span className="mobile__menu" onClick={toggleMenu}>
            {open? <i class="ri-close-line">
            </i>:  <i class="ri-menu-line">
            </i>}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
