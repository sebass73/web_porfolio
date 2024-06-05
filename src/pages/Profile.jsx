import "./Profile.css";

import english from "../assets/englishTrinity.jpg";
import react from "../assets/reactEducacionIT.jpeg";
import Skills from "../components/Skills";

const Profile = () => {
  return (
    <div className="profile-container">
      <Skills></Skills>
      <div className="profile-sub-container">
        <div
          id="carouselExampleControls"
          className="carousel slide mycarouselProfile"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={react} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={english} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
