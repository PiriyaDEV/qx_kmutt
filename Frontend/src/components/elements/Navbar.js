import React from "react";
import { useTranslation } from "react-i18next";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/navbar.css";

import qxLogo from "../../assets/images/home/QX-logo.png";
import world from "../../assets/images/navbar/Icon.svg";

export default function Navbar(props) {
  // const [lg, setLg] = useState("en");
  const { t, i18n } = useTranslation();

  const linkPath = (path) => {
    window.location.href = path;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.location.reload();
  };

  return (
    <div id="navbar" className="section">
      <div id="navbar-box" className="navbar-container">
        {/* {props.path !== "home" && (
          <img
            id="nav-logo"
            src={qxLogo}
            alt=""
            onClick={() => linkPath("/")}
          />
        )} */}
          <img
            id="nav-logo"
            className={`${props.path === "home" ? "nav-logo-hide" : null}`}
            src={qxLogo}
            alt=""
            onClick={() => linkPath("/")}
          />

        <h1 className="vsm-text w500" onClick={() => linkPath("/activity")}>
          {t("Navbar.Projects")}
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("/research")}>
          {t("Navbar.Research")}
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("/article")}>
          {t("Navbar.Articles")}
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("/member")}>
          {t("Navbar.Member")}
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("/about")}>
          {t("Navbar.About")}
        </h1>
        {/* <div id="lang-box">
          <img src={world} alt=""/>
          <div>
            <h1 className="vsm-text w500" onClick={() => changeLanguage("en")}>EN</h1>
            <h1 className="vsm-text w500" onClick={() => changeLanguage("th")}>TH</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
}
