import "./Home.css";
import avatar from "../assets/avatar.avif";
import me from "../assets/me1.svg";
import meDesktop from "../assets/me_desktop.svg";
import useWidthScreen from "../hooks/useWidthScreen";

import Draggable from "react-draggable";
import { useRef } from "react";
import AnimatedDownArrow from "../components/AnimatedDownArrow";
import ResumeButton from "../components/ResumeButton";
import LetsTalkButton from "../components/LetsTalkButton";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const widthScreen = useWidthScreen();

  const draggableRef = useRef(null);

  const { t } = useTranslation();

  return (
    <div className="home-container">
      {widthScreen < 998 ? (
        <div className="custom">
          <div className="relative">
            {/* <p style={{color: "white"}}>Toma este objeto y saludame!</p> */}
            <Draggable nodeRef={draggableRef}>
              <div ref={draggableRef} className="focus-container">
                <h3 className="welcome">{t('Home welcome')}</h3>
              </div>
            </Draggable>
            <img src={me} className="rounded-img" alt={avatar} />
            <div className="home-text">
              <h1 className="title">{t('Home title')}</h1>
              <h2 className="role">{t('Home role')}</h2>
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
              <h3 className="welcome-desktop">{t('Home welcome')}</h3>
              <h1 className="title font-link-title">{t('Home title desktop')}<span className="home-desktop-name">{t('Home title desktop name')}</span>!</h1>
              <h2 className="role">{t('Home role')}</h2>
              <h3 className="home-role-description-desktop">{t('Home role description desktop')}</h3>
            </div>
            <div className="home-buttons">
              <LetsTalkButton/>
              <ResumeButton/>
            </div>
          </div>
          <img src={meDesktop} className="rounded-img" alt={avatar} />
        </div>
      )}
    </div>
  );
};

export default Home;
