import React, { useState } from "react";
import "./Mode.css";

function Mode() {
  const [mode, setMode] = useState(true);





  // const sbg = document.querySelector(".arrow_right_two:before");
  // sbg.style.background = "red"  ;



  //  const element = document.querySelector(".arrow_right_two");
  //const cssObj = window.getComputedStyle(element, ":before");
  //cssObj.style.background = "white";




  // const toggleMode = () => {
  //   setMode(!mode);
  //   const bodybg = document.querySelector("body");
  //   const sbg = document.querySelector(".arrow_right_two:before");

  //   if (mode === true) {
  //     bodybg.style.background = "black";
  //     sbg.style.background = "black";
  //     // bodybg.classList.remove = "white";
  //     // bodybg.classList.add = "black";
  //   } else {
  //     bodybg.style.background = "white";
  //     sbg.style.background = "white";
  //     // bodybg.classList.remove = "black";
  //     // bodybg.classList.add = "white";
  //   }
  // };

  // // useEffect(() => {
  // //     const preferredMode = window.localStorage.getItem('mode')
  //     if (preferredMode) {
  //         setMode(preferredMode)
  //     }
  // }, [])

  // useEffect(() => {
  //     window.localStorage.setItem('mode', mode)
  // }, [mode])

  // return (
  //   <button className="mode_btn" onClick={}>
  //     {mode === true ? "LIGHT" : "DARK"}
//   //   </button>
//   );
}

export default Mode;
