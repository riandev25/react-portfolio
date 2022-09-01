import React from "react";

const Header2 = () => {
  return (
    <header class="header">
      <a href className="logo">
        Logo
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#section--aboutme">About</a>
        </li>
        <li>
          <a href="#section--technologies">Tools</a>
        </li>
        <li>
          <a href="#section--projects">Projects</a>
        </li>
        <li>
          <a href="#section--contactme">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header2;
