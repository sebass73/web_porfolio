import "./Home.css";
import avatar from "../assets/avatar.avif";
import me from "../assets/me1.svg";
import useWidthScreen from "../hooks/useWidthScreen";

import Draggable from "react-draggable";
import { useRef } from "react";
import AnimatedDownArrow from "../components/AnimatedDownArrow";
import ResumeButton from "../components/ResumeButton";
import LetsTalkButton from "../components/LetsTalkButton";

const Home = () => {
  const widthScreen = useWidthScreen();

  const draggableRef = useRef(null);

  return (
    <div className="home-container">
      {widthScreen < 998 ? (
        <div className="custom">
          <div className="relative">
            {/* <p style={{color: "white"}}>Toma este objeto y saludame!</p> */}
            <Draggable nodeRef={draggableRef}>
              <div ref={draggableRef} className="focus-container">
                {/* <h3 className="welcome">Hola, ¿qué tal? 👋</h3> */}
                <h3 className="welcome">Hey, ¿How's going on? 👋</h3>
              </div>
            </Draggable>
            <img src={me} className="rounded-img" alt={avatar} />
            <div className="home-text">
              {/* <h1 className="title">¡Yo soy Sebastián!</h1> */}
              <h1 className="title">¡I am Sebastián!</h1>
              <h2 className="role">FullStack Developer</h2>
            </div>
          </div>
          <div className="home-buttons">
            <LetsTalkButton />
            <ResumeButton />
          </div>
          {/*           <div className="arrow">
            <a to="/about" href="#about">
              <AnimatedDownArrow/>
            </a>
          </div> */}
        </div>
      ) : (
        <div className="custom">
          <div className="welcome-text-desktop">
            <div className="home-text">
              <h3 className="welcome">Hola, ¿que tal? 👋</h3>
              <h1 className="title font-link-title">Yo soy Sebastian</h1>
              <h2 className="role">FullStack Developer</h2>
            </div>
            <div className="home-buttons">
              <button
                className="btn btn-primary me-2"
                onClick={handleHablemosClick}
              >
                Hablemos!
              </button>
              <button className="btn btn-secondary">My CV</button>
            </div>
          </div>
          <img src={avatar} className="rounded-img" alt={avatar} />
        </div>
      )}
    </div>
  );
};

export default Home;
