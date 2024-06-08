import "./Skills.css";
import nodejsicon from "../assets/icons/nodejsicon.svg";
import reactjsicon from "../assets/icons/reactjsicon.svg";
import reduxicon from "../assets/icons/redux.svg";
import scss from "../assets/icons/scss.svg";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-element">
        <img src={nodejsicon} alt="" className="icon" />
        <span className="icon-description">Node.js</span>
      </div>
      <div className="skills-element">
        <img src={reactjsicon} alt="" className="icon" />
        <span className="icon-description">React.js</span>
      </div>
      <div className="skills-element">
        <img src={reduxicon} alt="" className="icon" />
        <span className="icon-description">Redux</span>
      </div>
      <div className="skills-element">
        <img src={scss} alt="" className="icon" />
        <span className="icon-description">Scss</span>
      </div>
    </div>
  );
};

export default Skills;
