import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

const nav__links2 = [
    {
      path: "/appdevelopment",
      display: "App Development",
      cName: "submenu-item",
    },
    {
      path: "/webdevelopment",
      display: "Web Design",
      cName: "submenu-item",
    },
    {
      path: "/graphicsdesign",
      display: "Graphics Design",
      cName: "submenu-item",
    },
  ];

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  const handleLinkClick = () => {
    setDropdown(false);
  };

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {nav__links2.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={handleLinkClick}
              >
                {item.display}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;