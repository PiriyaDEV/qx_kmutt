import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/navbar.css";

import qxLogo from "../../assets/images/home/QX-logo.png";

export default function Navbar(props) {
  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div id="navbar" className="section">
      <div id="navbar-box" className="navbar-container">
        {props.path !== "home" && (
          <img
            id="nav-logo"
            src={qxLogo}
            alt=""
            onClick={() => linkPath("/")}
          />
        )}

        <h1 className="vsm-text w500" onClick={() => linkPath("project")}>
          Projects
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("research")}>
          Research
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("article")}>
          Articles
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("member")}>
          Member
        </h1>
        <h1 className="vsm-text w500" onClick={() => linkPath("about")}>
          About
        </h1>
      </div>
    </div>
  );
}
