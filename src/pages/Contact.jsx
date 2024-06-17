import "./Contact.css";

import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import useWidthScreen from "../hooks/useWidthScreen";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:semartinez.6226@gmail.com?subject=Subject&body=Message";
  };

  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/martinez-sebastian/";
  };

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/sebamartinez88/";
  };

  const { t } = useTranslation();

  const widthScreen = useWidthScreen();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_TEMPLATE_ID,
        import.meta.env.VITE_SERVICE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully...");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {widthScreen < 998 ? (
        <>
          <h1 className="contact-title">{t("Contact title")}</h1>
          <div className="social-media-container">
            <button
              className="btn social-media-button"
              onClick={handleEmailClick}
            >
              <img src={gmail} alt="Gmail Icon" className="contact-icon" />
              <div className="social-media-button-container">
                <span className="social-media-button-title">Email</span>
                <div className="social-media-button-subtitle">
                  {t("Email Social media button subtitle")}
                </div>
              </div>
            </button>
            <button
              className="btn social-media-button"
              onClick={handleLinkedInClick}
            >
              <img src={linkedin} alt="" className="contact-icon" />
              <div className="social-media-button-container">
                <span className="social-media-button-title">LinkedIn</span>
                <span className="social-media-button-subtitle">
                  {t("Linkedin Social media button subtitle")}
                </span>
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
                  {t("Github Social media button subtitle")}
                </span>
              </div>
            </button>
            <button
              className="btn social-media-button"
              onClick={handleInstagramClick}
            >
              <img src={instagram} alt="" className="contact-icon" />
              <div className="social-media-button-container">
                <span className="social-media-button-title">Instagram</span>
                <span className="social-media-button-subtitle">
                  {t("Instagram Social media button subtitle")}
                </span>
              </div>
            </button>
          </div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <h2 className="contact-form-title">Send me a message</h2>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              {t("Contact form name")}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ex: Jonh Snow"
              name="from_name"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-2"
            >
              {t("Contact form email")}
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="snow@example.com"
              name="from_email"
            />
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label mt-2"
            >
              {t("Contact form title message")}
            </label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder={t("Contact form title placeholder")}
            ></textarea>
            <button className="btn btn-secondary btn-send">
              {t("Lets talk button")}
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 className="contact-title">{t("Contact title")}</h1>
          <div className="contact-sub-container">
            <div className="social-media-container">
              <h2 className="social-media-container-title">Social Media</h2>
              <button
                className="btn social-media-button"
                onClick={handleEmailClick}
              >
                <img src={gmail} alt="Gmail Icon" className="contact-icon" />
                <div className="social-media-button-container">
                  <span className="social-media-button-title">Email</span>
                  <div className="social-media-button-subtitle">
                    {t("Email Social media button subtitle")}
                  </div>
                </div>
              </button>
              <button
                className="btn social-media-button"
                onClick={handleLinkedInClick}
              >
                <img src={linkedin} alt="" className="contact-icon" />
                <div className="social-media-button-container">
                  <span className="social-media-button-title">LinkedIn</span>
                  <span className="social-media-button-subtitle">
                    {t("Linkedin Social media button subtitle")}
                  </span>
                </div>
              </button>
              <button className="btn social-media-button social-media-button-gray">
                <img src={github} alt="" className="contact-icon" />
                <div className="social-media-button-container">
                  <span className="social-media-button-title">Github</span>
                  {/*             <span className="social-media-button-subtitle">
              Check out my repos
            </span> */}
                  <span className="social-media-button-subtitle">
                    {t("Github Social media button subtitle")}
                  </span>
                </div>
              </button>
              <button
                className="btn social-media-button"
                onClick={handleInstagramClick}
              >
                <img src={instagram} alt="" className="contact-icon" />
                <div className="social-media-button-container">
                  <span className="social-media-button-title">Instagram</span>
                  <span className="social-media-button-subtitle">
                    {t("Instagram Social media button subtitle")}
                  </span>
                </div>
              </button>
            </div>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <h2 className="contact-form-title">Send me a message</h2>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                {t("Contact form name")}
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ex: Jonh Snow"
                name="from_name"
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label mt-2"
              >
                {t("Contact form email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="snow@example.com"
                name="from_email"
              />
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label mt-2"
              >
                {t("Contact form title message")}
              </label>
              <textarea
                className="form-control"
                type="text"
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder={t("Contact form title placeholder")}
              ></textarea>
              <button className="btn btn-secondary btn-send mt-5">
                {t("Lets talk button")}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
