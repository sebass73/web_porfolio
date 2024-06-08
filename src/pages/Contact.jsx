import "./Contact.css";

import nodejsicon from "../assets/icons/nodejsicon.svg";
import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:semartinez.6226@gmail.com?subject=Subject&body=Message';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/martinez-sebastian/';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/sebamartinez88/';
  };
  
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact me</h1>
      <div className="social-media-container">
        <button className="btn social-media-button" onClick={handleEmailClick}>
          <img src={gmail} alt="Gmail Icon" className="contact-icon" />
          <div className="social-media-button-container">
            <span className="social-media-button-title">Email</span>
            <span className="social-media-button-subtitle">
              Let's get in touch
            </span>
          </div>
        </button>
        <button className="btn social-media-button" onClick={handleLinkedInClick}>
          <img src={linkedin} alt="" className="contact-icon" />
          <div className="social-media-button-container">
            <span className="social-media-button-title">LinkedIn</span>
            <span className="social-media-button-subtitle">Let's connect</span>
          </div>
        </button>
        <button className="btn social-media-button-gray">
          <img src={github} alt="" className="contact-icon" />
          <div className="social-media-button-container">
            <span className="social-media-button-title">Github</span>
{/*             <span className="social-media-button-subtitle">
              Check out my repos
            </span> */}
            <span className="social-media-button-subtitle">
              Coming soon
            </span>
          </div>
        </button>
        <button className="btn social-media-button" onClick={handleInstagramClick}>
          <img src={instagram} alt="" className="contact-icon" />
          <div className="social-media-button-container">
            <span className="social-media-button-title">Instagram</span>
            <span className="social-media-button-subtitle">More about me</span>
          </div>
        </button>
      </div>
      <div className="contact-form">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre
        </label>
        <input
          type=""
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ex: Jonh Snow"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
          Correo electronico
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="snow@example.com"
        />
        <label htmlFor="exampleFormControlTextarea1" className="form-label mt-2">
          ¿Qué mas es posible?
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Me contacto contigo..."
        ></textarea>
        <button className="btn btn-secondary btn-send">Let's talk! </button>
      </div>
    </div>
  );
};

export default Contact;
