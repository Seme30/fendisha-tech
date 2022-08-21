import React, {useRef, useEffect} from "react";
import Logo from '../Pages/Home/images/logo.png'
import Logolight from '../Pages/Home/images/Fendisha-light.png'
import "./header.css";


const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blogs",
    display: "Blogs",
  },
];

const Header = ({ theme, toggleTheme }) => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

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

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left:0,
      top: location-80
    })
  }

  const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')
  

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* logo */}
          <div className="logo"ref={menuRef}>
            <img src={ theme==='light-theme'? Logolight: Logo} alt ='logo'></img>
          </div>

          {/* navigation */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} className="menu__link" onClick={handleClick}>
                    {item.display}
                  </a>
                </li>
              ))}
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
            <i class="ri-menu-line">

            </i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
