import "./Navbar.css";
import { pageList } from "../constants/pageList";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useWidthScreen from "../hooks/useWidthScreen";
import argentinaFlag from "../../public/argentinaFlag.png";
import brackets from "../../public/brackets.svg";
import UKFlag from "../../public/ukFlag.png";

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavItemClick = () => {
    setIsNavbarCollapsed(true);
  };

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const widthScreen = useWidthScreen();

  return (
    <>
      {widthScreen < 998 ? (
        <>
          <nav
            className={`navbar navbar-expand-lg ${
              isScrolled ? "navbar-colored" : "navbar-transparent"
            } navbar-light`}
          >
            <div
              className="container-fluid"
            >
              <img src={brackets} style={{width: "1.75rem", height: "1.75rem"}} alt="" />
              <a className="navbar-brand" href="/">
                Sebas.Dev
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isNavbarCollapsed ? "collapse" : "show"
                }`}
                id="navbarNav"
              >
                <ul className="navbar-nav mx-auto">
                  {pageList.map((page, i) => (
                    <li key={page + i} className="nav-item">
                      <a
                        className="nav-link "
                        aria-current="page"
                        to={page.route}
                        href={page.href}
                        onClick={handleNavItemClick}
                      >
                        {t(page.name)}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="switch-container">
                  <div
                    className="form-check-label me-2"
                    style={{ color: "white", fontWeight: "600" }}
                    htmlFor=""
                  >
                    🇬🇧 English
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={() =>
                        changeLanguage(i18n.language === "en" ? "es" : "en")
                      }
                      checked={i18n.language === "es"}
                    />
                  </div>
                  <div
                    className="form-check-label"
                    style={{ color: "white", fontWeight: "600" }}
                    htmlFor=""
                  >
                    🇦🇷 Español
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav
            className={`navbar navbar-expand-lg ${
              isScrolled ? "navbar-colored" : "navbar-transparent"
            } navbar-light`}
          >
            <div
              className="container-fluid d-flex ms-2"
            >
              <img src={brackets} style={{width: "28px", height: "28px"}} className="hover-effect" alt="" />
              <a
                className="navbar-brand hover-effect"
                href="/"
              >
                Sebas.Dev
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isNavbarCollapsed ? "show" : "show"
                }`}
                id="navbarNav"
              >
                <ul className="navbar-nav mx-auto">
                  {pageList.map((page, i) => (
                    <li
                      key={page + i}
                      className="nav-item hover-effect"
                    >
                      <a
                        className="nav-link"
                        aria-current="page"
                        to={page.route}
                        href={page.href}
                        onClick={handleNavItemClick}
                      >
                        {t(page.name)}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="switch-container">
                  <div
                    className="form-check-label me-2"
                    style={{ color: "wheat" }}
                    htmlFor=""
                  >
                    <img src={UKFlag} style={{width: "28px", height: "28px"}} className="hover-effect" alt="" />
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input me-2 hover-effect"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={() =>
                        changeLanguage(i18n.language === "en" ? "es" : "en")
                      }
                      checked={i18n.language === "es"}
                    />
                  </div>
                  <div
                    className="form-check-label"
                    style={{ color: "wheat" }}
                    htmlFor=""
                  >
                    <img src={argentinaFlag} style={{width: "28px", height: "28px"}} className="hover-effect" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
