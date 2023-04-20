import React, { useState, useRef } from "react";
import "./Navbar.css";
import Song from "../../Assets/song.mp3";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isplaying, setIsplaying] =useState(false);
  const audioRef = useRef(null);
   
 
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }; 


  const togglePlay =()=> {
    const audio = audioRef.current;
    if(isplaying){
      audio.pause();
    }else{
      audio.play();
    }
    setIsplaying(!isplaying);
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
          <li className="nav-item">
            <div type=""  className="nav-link" onClick={togglePlay}>
              SOUND : {isplaying ? "ON" : "OFF"}
            </div>
          </li>
        </ul>
      </div>
      <audio ref={audioRef} src={Song} loop ></audio>
    </nav>
  );
}

export default Navbar;
