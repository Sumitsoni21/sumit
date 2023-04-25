import React, { useState, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
 
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }; 


  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo">
          SUMIT
        </a>
        <div className="menu-icon" onClick={toggleNav}>
          {isOpen ? <i className="fa-solid fa-bars fa-fade"></i> : <i className="fa-solid fa-bars fa-beat-fade"></i>}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
