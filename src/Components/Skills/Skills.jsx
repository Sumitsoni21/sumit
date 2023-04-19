import "./Skills.css";

function Skills() {
  return (
    <div className="skills section">
      <div className="skills_container container">
        <h3 className="skills_title rainbow">MY SKILLS </h3>
        
        <div className="skills_main ">

          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">HTML</p>
              <p className="percent">70%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>

          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">CSS</p>
              <p className="percent">50%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>
          
          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">BOOTSTRAP</p>
              <p className="percent">40%</p>
            </div>
            <div className="bar">
              <span className="bootstrap"></span>
            </div>
          </div>

          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">JAVASCRIPT</p>
              <p className="percent">60%</p>
            </div>
            <div className="bar">
              <span className="js"></span>
            </div>
          </div>

          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">REACT</p>
              <p className="percent">60%</p>
            </div>
            <div className="bar">
              <span className="react"></span>
            </div>
          </div>

          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">GIT AND GITHUB</p>
              <p className="percent">40%</p>
            </div>
            <div className="bar">
              <span className="git"></span>
            </div>
          </div>

          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">NODEJS</p>
              <p className="percent">45%</p>
            </div>
            <div className="bar">
              <span className="node"></span>
            </div>
          </div>


          <div className="skills_bar">
            <div className="info">
              <p className="skills_name">MONGODB</p>
              <p className="percent">40%</p>
            </div>
            <div className="bar">
              <span className="mongo"></span>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default Skills;
