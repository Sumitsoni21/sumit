import "./About.css";
import Img from "../../Assets/IMG20211120170709.jpg";
import Animate from "../Home/Animate";

function About() {
  const Fullname = [
    "S",
    "U",
    "M",
    "I",
    "T",
    " ",
    "K",
    "U",
    "M",
    "A",
    "R",
    " ",
    "S",
    "O",
    "N",
    "I",
  ];

  return (
    <div className="about section" id="about">
      <div className="about_container container ">
        <h3 className="about_title rainbow">
          {Fullname.map((text, i) => (
            <Animate key={i} brand={text} />
          ))}
        </h3>
        <div className="about_content_container ">
          <div className="about_img_container">
            <img className="about_img" src={Img} alt="Image"></img>
          </div>
          <div className="about_content">
            <div className="about_description_container">
             
              <p className="about_description">
                A who design and develop a website that is
                dynamic, aesthetically pleasing, functional and easy to
                navigate, providing a seamless user experience.{" "}
              </p>

              <p className="about_description">
                Friendly, Traveller, Adventures and currently studying B.SC CSA
                (Honours) from Atal Bihari Vajpayee University Bilaspur.{" "}
              </p>
              <p className="about_description">
                With my experience whether you need a new website or need assistance with an existing project, I am
                here to help you achieve your goals.
               </p>
            </div>
           <div className="about_button_container">
              <a href="#" className="button about_button">
                {" "}
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
