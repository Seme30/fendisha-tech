import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './mobilenav.css';

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
    children: [
      { path: "/appdevelopment", display: "App Development" },
      { path: "/webdevelopment", display: "Web Development" },
      { path: "/graphicsdesign", display: "Graphics Design" }
    ]
  },
  {
    path: "/contactus",
    display: "Contact",
  },
];

const MobileNav = ({ isOpen, onClose, theme, toggleTheme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Close mobile nav when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setDropdownOpen(null);
    onClose();
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('mobile-nav-overlay')) {
      onClose();
    }
  };

  return (
    <div 
      className={`mobile-nav-overlay ${isOpen ? 'mobile-nav-active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="mobile-nav-container">
        {/* Close Button */}
        <div className="mobile-nav-header">
          <button className="mobile-nav-close" onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mobile-nav-menu">
          <ul className="mobile-nav-list">
            {nav__links.map((item, index) => {
              if (item.children) {
                return (
                  <li key={index} className="mobile-nav-item dropdown-item">
                    <button 
                      className="mobile-nav-link dropdown-toggle"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.display}
                      <i className={`ri-arrow-${dropdownOpen === index ? 'up' : 'down'}-s-line`}></i>
                    </button>
                    <ul className={`mobile-dropdown ${dropdownOpen === index ? 'dropdown-open' : ''}`}>
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex} className="mobile-dropdown-item">
                          <Link 
                            to={child.path} 
                            className="mobile-dropdown-link"
                            onClick={handleLinkClick}
                          >
                            {child.display}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              
              return (
                <li key={index} className="mobile-nav-item">
                  <Link 
                    to={item.path} 
                    className="mobile-nav-link"
                    onClick={handleLinkClick}
                  >
                    {item.display}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle */}
          <div className="mobile-theme-toggle">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <>
                  <i className="ri-moon-line"></i>
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <i className="ri-sun-line"></i>
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
