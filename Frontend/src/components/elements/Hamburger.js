import React from "react";
import { slide as Menu } from "react-burger-menu";

import "../../assets/css/pages.css";
import "../../assets/css/text.css";
import "../../assets/css/elements/hamburger.css";

export default function Hamburger() {
  return (
    <div>
      <Menu id="hamburger" right>
        <div className="menu-item hamburger-text" onClick={() => linkPath("/activity")}>
          <h1 className="xm-text w500">Activity</h1>
        </div>

        <div className="menu-item hamburger-text" onClick={() => linkPath("/research")}>
          <h1 className="xm-text w500">Research</h1>
        </div>

        <div className="menu-item hamburger-text" onClick={() => linkPath("/article")}>
          <h1 className="xm-text w500">Article</h1>
        </div>

        <div className="menu-item hamburger-text" onClick={() => linkPath("/member")}>
          <h1 className="xm-text w500">Member</h1>
        </div>

        <div className="menu-item hamburger-text hamburger-last" onClick={() => linkPath("/about")}>
          <h1 className="xm-text w500">About</h1>
        </div>
      </Menu>
    </div>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};
