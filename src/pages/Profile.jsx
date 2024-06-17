import "./Profile.css";

import english from "../assets/englishTrinity.jpg";
import react from "../assets/reactEducacionIT.jpeg";
import Skills from "../components/Skills";
import ResumeButton from "../components/ResumeButton";
import zoom from "../assets/icons/zoom-fit.svg";
import { useTranslation } from "react-i18next";
import useWidthScreen from "../hooks/useWidthScreen";
import { useState } from "react";

const Profile = () => {
  const { t } = useTranslation();

  const widthScreen = useWidthScreen();

  const [modalMesageSrc, setModalMesageSrc] = useState("");

  const handleImageClick = (src) => {
    setModalMesageSrc(src);
  };

  return (
    <div className="profile-container">
      {widthScreen < 998 ? (
        <>
          <Skills></Skills>
          <div className="profile-sub-container">
            <div
              id="carouselExampleIndicatorsProfile"
              className="carousel slide profileCarousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsProfile"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsProfile"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                {/*             <button
              type="button"
              data-bs-target="#carouselExampleIndicatorsProfile"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button> */}
              </div>
              <div className="carousel-inner carousel-inner-profile">
                <div className="carousel-item">
                  <img
                    src={react}
                    className="d-block w-100 carousel-profile-img"
                    alt="..."
                  />
                </div>
                <div className="carousel-item active">
                  <img
                    src={english}
                    className="d-block w-100 carousel-profile-img"
                    alt="..."
                  />
                </div>
                {/*             <div className="carousel-item">
              <img src={avatar} className="d-block w-100 carousel-profile-img" alt="..." />
            </div> */}
              </div>
              <button
                className="carousel-control-prev carousel-control-prev-profile"
                type="button"
                data-bs-target="#carouselExampleIndicatorsProfile"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon carousel-control-prev-icon-profile"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next carousel-control-next-profile"
                type="button"
                data-bs-target="#carouselExampleIndicatorsProfile"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon carousel-control-next-icon-profile"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h1 className="profile-title">{t("Profile title")}</h1>
            <p className="profile-paragraph">{t("Profile paragraph")}</p>
            <ResumeButton />
          </div>
        </>
      ) : (
        <>
          <div className="profile-sub-container">
            <section className="profile-skills-info">
              <section-header>
                <div className="profile-title-button">
                  <h1 className="profile-title">{t("Profile title")}</h1>
                  <ResumeButton />
                </div>
                <p className="profile-paragraph">{t("Profile paragraph")}</p>
              </section-header>
              <div
                id="carouselExampleIndicatorsProfile"
                className="carousel slide profileCarousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsProfile"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsProfile"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  {/*             <button
              type="button"
              data-bs-target="#carouselExampleIndicatorsProfile"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button> */}
                </div>
                <div
                  className="carousel-inner carousel-inner-profile"
                  data-bs-toggle="modal"
                  data-bs-target="#imageExample"
                >
                  <div className="carousel-item">
                    <img
                      src={react}
                      className="d-block w-100 carousel-profile-img"
                      alt="..."
                      id="carousel-img-react"
                      onClick={() => handleImageClick(react)}
                    />
                    <span
                      className="carousel-control-next carousel-control-zoom"
                      type="button"
                    >
                      <img
                        src={zoom}
                        alt=""
                        className="carousel-control-zoom-icon"
                        onClick={() => handleImageClick(react)}
                      />
                    </span>
                  </div>
                  <div className="carousel-item active">
                    <img
                      src={english}
                      className="d-block w-100 carousel-profile-img"
                      alt="..."
                      onClick={() => handleImageClick(english)}
                    />
                    <span
                      className="carousel-control-next carousel-control-zoom"
                      type="button"
                    >
                      <img
                        src={zoom}
                        alt=""
                        className="carousel-control-zoom-icon"
                        onClick={() => handleImageClick(english)}
                      />
                    </span>
                  </div>
                  {/*             <div className="carousel-item">
              <img src={avatar} className="d-block w-100 carousel-profile-img" alt="..." />
            </div> */}
                </div>
                <button
                  className="carousel-control-prev carousel-control-prev-profile"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsProfile"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon carousel-control-prev-icon-profile"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next carousel-control-next-profile"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsProfile"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon carousel-control-next-icon-profile"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Modal */}
              <div
                className="modal fade"
                id="imageExample"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close me-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src={modalMesageSrc}
                        alt=""
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="profile-skills-card">
              <article>
                <Skills name="Backend" />
              </article>
              <article>
                <Skills name="Frontend" />
              </article>
              <article>
                <Skills name="Tools" />
              </article>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
