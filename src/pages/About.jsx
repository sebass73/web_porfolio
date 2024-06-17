import avatar from "../assets/avatar.avif";
import slackPhoto from "../assets/slackline.jpg";
import yoga from "../assets/yoga.jpg";
import acroyoga from "../assets/acroyoga.jpg";
import useWidthScreen from "../hooks/useWidthScreen";
import "./About.css";
import Draggable from "react-draggable";
import { useRef } from "react";
import ResumeButton from "../components/ResumeButton";
import LetsTalkButton from "../components/LetsTalkButton";
import { useTranslation } from "react-i18next";

const About = () => {
  const handleHablemosClick = () => {
    window.location.href = "#contact";
  };

  const widthScreen = useWidthScreen();

  const draggableRef = useRef(null);

  const { t } = useTranslation();

  return (
    <div className="about-container">
      {widthScreen < 998 ? (
        <div className="about-sub-container">
          {/*           <Draggable nodeRef={draggableRef}>
            <div ref={draggableRef} className="focus-container">
              <h3 className="welcome">Hola, ¿qué tal? 👋</h3>
            </div>
          </Draggable> */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide mycarousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators invisible">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner carousel-inner-home">
              <div className="carousel-item active">
                <img
                  src={yoga}
                  className="d-block w-100 carousel-img"
                  alt={avatar}
                />
              </div>
              <div className="carousel-item">
                <img src={slackPhoto} className="d-block w-100" alt={avatar} />
              </div>
              <div className="carousel-item">
                <img src={acroyoga} className="d-block w-100" alt={avatar} />
              </div>
            </div>
            <button
              className="carousel-control-prev carousel-control-prev-home"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon carousel-control-prev-icon-home"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-control-next-home"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon carousel-control-next-icon-home"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <h1 className="about-title">{t("About title")}</h1>
          <div className="about-description">
            <p>{t("About description")}</p>
          </div>
          <div className="about-buttons">
            <LetsTalkButton />
            <ResumeButton />
          </div>
        </div>
      ) : (
        <div className="about-sub-container">
          <div id="carouselExampleIndicators" className="carousel slide mycarousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={yoga} className="d-block w-100" alt={avatar} />
              </div>
              <div className="carousel-item">
                <img src={slackPhoto} className="d-block w-100" alt={avatar} />
              </div>
              <div className="carousel-item">
                <img src={acroyoga} className="d-block w-100" alt={avatar} />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              style={{justifyContent: "flex-start !important"}}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-control-next-about"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              style={{justifyContent: "flex-start !important"}}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="about-description">
            <div className="about-description-subcontainer">
              <h1 className="about-title">{t("About title")}</h1>
              <p className="">{t("About description")}</p>
              <div className="about-buttons">
                <LetsTalkButton />
                <ResumeButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
