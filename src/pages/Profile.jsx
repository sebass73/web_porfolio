import "./Profile.css";

import english from "../assets/englishTrinity.jpg";
import react from "../assets/reactEducacionIT.jpeg";
import avatar from "../assets/avatar.avif";
import Skills from "../components/Skills";
import ResumeButton from "../components/ResumeButton";

const Profile = () => {
  return (
    <div className="profile-container">
      <Skills></Skills>
      <div className="profile-sub-container">
        <div id="carouselExampleIndicatorsProfile" className="carousel slide profileCarousel" data-bs-ride="carousel">
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
              <img src={react} className="d-block w-100 carousel-profile-img" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={english} className="d-block w-100 carousel-profile-img" alt="..." />
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
            <span className="carousel-control-prev-icon carousel-control-prev-icon-profile" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next carousel-control-next-profile"
            type="button"
            data-bs-target="#carouselExampleIndicatorsProfile"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon carousel-control-next-icon-profile" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className="profile-title">My Profile</h1>
        <p className="profile-paragraph">
        {/* Desarrollador Fullstack con 5 años de experiencia, dominio de un amplio stack de tecnologías y formación universitaria. Especializado en tecnologías e idiomas, destaco en soluciones innovadoras y de alta calidad, aportando valor y eficiencia en cada proyecto. */}
        Fullstack Developer with 5 years of experience, proficient in a wide range of technologies and holding a university degree. Specialized in technologies and languages, I excel in creating innovative, high-quality solutions, bringing value and efficiency to every project.
        </p>
        {/* <button className="btn btn-secondary">My Resume</button> */}
        <ResumeButton/>
      </div>
    </div>
  );
};

export default Profile;
