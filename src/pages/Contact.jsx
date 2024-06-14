import "./Contact.css";

import nodejsicon from "../assets/icons/nodejsicon.svg";
import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

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

  const form = useRef();
  const sendEmail = (e) => {
    /*   
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY 
    */
    e.preventDefault();
    console.log(form.current);
/*     emailjs
      .sendForm(
        "service_5erovf9",
        "template_l1x1jaw",
        form.current,
        "Yi2opB9EadslOPdSd"
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ); */
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">{t("Contact title")}</h1>
      <div className="social-media-container">
        <button className="btn social-media-button" onClick={handleEmailClick}>
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
        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
          {t("Contact form email")}
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="snow@example.com"
          name="to_name"
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
      {/* <div>
        <h1>Contact Form</h1>
        <form className="cf" ref={form} onSubmit={sendEmail}>
          <div className="half left cf">
            <input type="text" placeholder="Name" name="from_name" />
            <input type="email" placeholder="Email address" name="to_name" />
          </div>
          <div className="half right cf">
            <textarea
              name="message"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>
          <input type="submit" value="Submit" id="input-submit" />
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
