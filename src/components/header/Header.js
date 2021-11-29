import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/imgs/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handeClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>

      <nav className={`navbar ${showMenu && "active"}`}>
        <a href="#roadmap">Roadmap</a>
        <a href="#about">Team</a>
        <a href="#menu">Pyme</a>
        <a href="#products">Discrod</a>
      </nav>

      <div className="icons">
        <div onClick={handeClick} className="fas fa-bars" id="menu-btn"></div>
      </div>
    </header>
  );
}

export default Header;
