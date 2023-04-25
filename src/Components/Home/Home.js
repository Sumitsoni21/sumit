import React, { useState, useRef, useEffect } from "react";
import Social from "../Social/Social";
import Animate from "./Animate";
import "./Home.css";
import Song from "../../Assets/song.mp3";

function Home() {
  const Greet = ["H", "i", ","];
  const Intro = ["I", "'", "m"];
  const Name = ["S", "U", "M", "I", "T"];

  const [isHovering, setIsHovering] = useState(false);
  const textRef = useRef(null);

  const [isHoveringtwo, setIsHoveringtwo] = useState(false);
  const texttwoRef = useRef(null);

  const [isplaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isplaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsplaying(!isplaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 1000);
    }, 2500);

    const intervaltwoId = setInterval(() => {
      setIsHoveringtwo(true);
      setTimeout(() => {
        setIsHoveringtwo(false);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervaltwoId);
    };
  }, []);

  return (
    <div className="home section" id="home">
      <div className="home_container container">
        <div className="home_content ">
          <h1 className="home_title">
            {Greet.map((text, i) => (
              <Animate key={i} brand={text} hovering={isHoveringtwo}/>
            ))}

            <span className="line_break">
              {Intro.map((text, i) => (
                <Animate key={i} brand={text} />
              ))}

              <span className="space">
                {Name.map((text, i) => (
                  <Animate key={i} brand={text} hovering={isHovering} />
                ))}
              </span>
            </span>
          </h1>

          <span className="home_subtitle rainbow">Full Stack Developer</span>

          <a href="#contact" className="button ">
            {" "}
            Contact Me
          </a>
        </div>
      </div>
      <div>
        <Social />
        <div className="sound_container">
          <button class="glowing-btn" onClick={togglePlay}>
            <span class="glowing-txt">
              SOUND<span class="faulty-letter">: </span>
              {isplaying ? "ON" : "OFF"}
            </span>
            <audio ref={audioRef} src={Song} loop autoPlay></audio>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
