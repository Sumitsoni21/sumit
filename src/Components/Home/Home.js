import Social from "../Social/Social";
import Animate from "./Animate";
import "./Home.css";
import Song from "../../Assets/song.mp3";

function Home() {
  const Greet = ["H", "i", ","];
  const Intro = ["I", "'", "m"];
  const Name = ["S", "U", "M", "I", "T"];


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
                <Animate key={i} brand={text} />
              ))}
            </span>
            </span>


          </h1>


          <span className="home_subtitle rainbow">Full Stack Developer</span>

          <a href="#" className="button ">
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
