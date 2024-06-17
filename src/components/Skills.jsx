import "./Skills.css";
import useWidthScreen from "../hooks/useWidthScreen";
import { techStack } from "../constants/techStack";
import Slider from "react-slick";

const Skills = (props) => {
  const widthScreen = useWidthScreen();

  const matchedTech = techStack.find((tech) => tech.name === props.name);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <>
      {widthScreen < 998 ? (
        <div className="skills-container">
          <Slider {...settings} className="skills-sub-container">
            {techStack.map((category) =>
              category.values.map((tech) => (
                <div key={tech.name} className="skills-element hover-effect">
                  <img src={tech.img} alt={tech.name} className="icon" />
                  <span className="icon-description">{tech.name}</span>
                </div>
              ))
            )}
          </Slider>
        </div>
      ) : (
        <div className="card card-skills hover-effect">
          <div className="card-header card-header-skills">
            <h1 className="skills-title">{props.name}</h1>
          </div>
          <ul className="skills-list">
            {matchedTech ? (
              matchedTech.values.map((value, i) => (
                <li key={i} className="skills-element hover-effect">
                  <img src={value.img} alt="" className="icon me-1" />
                  <span className="icon-description">{value.name}</span>
                </li>
              ))
            ) : (
              <div>No matching tech stack found</div>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Skills;
