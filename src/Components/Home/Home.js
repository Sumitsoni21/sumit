import React, {useState, useRef, useEffect} from "react";
import Social from "../Social/Social";
import Animate from "./Animate";
import "./Home.css";


function Home() {
  const Greet = ["H", "i", ","];
  const Intro = ["I", "'", "m"];
  const Name = ["S", "U", "M", "I", "T"];

  const [isHovering, setIsHovering] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 1000);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);  

  return (
    <div className="home section" id="home">

       <div className="home_container container">
        <div className="home_content ">
          <h1 className="home_title">
            {Greet.map((text, i) => (
              <Animate key={i} brand={text} />
            ))}
           

            <span className="line_break">

              {Intro.map((text, i) => (
                <Animate key={i} brand={text} />
              ))}

            <span className="space">
              {Name.map((text, i) => (
                <Animate key={i} brand={text} hovering={isHovering}/>
              ))}
            </span>
            </span>


          </h1>


          <span className="home_subtitle rainbow">Full Stack Developer</span>

          <a href="#contact"  className="button ">
            {" "}
            Contact Me
          </a>
        </div>
        
      </div> 
      <div><Social /></div>
    </div>
  );
}

export default Home;
