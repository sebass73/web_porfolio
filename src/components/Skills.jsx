import "./Skills.css";
import nodejsicon from "../assets/icons/nodejsicon.svg";
import reactjsicon from "../assets/icons/reactjsicon.svg";
import reduxicon from "../assets/icons/redux.svg";
import scss from "../assets/icons/scss.svg";

const Skills = () => {
  return (
    <div className="skills-container">
      <img src={nodejsicon} alt="" className="icon" />
      <img src={reactjsicon} alt="" className="icon" />
      <img src={reduxicon} alt="" className="icon" />
      <img src={scss} alt="" className="icon" />
    </div>
  );
};

export default Skills;
