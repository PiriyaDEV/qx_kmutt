import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/navbar.css";

export default function Navbar() {
  return (
    <div id="navbar" className="section">
      <div id="navbar-box" className="navbar-container">
        <h1 className="vsm-text w500">Projects</h1>
        <h1 className="vsm-text w500">Research</h1>
        <h1 className="vsm-text w500">Articles</h1>
        <h1 className="vsm-text w500">Member</h1>
        <h1 className="vsm-text w500">About</h1>
      </div>
    </div>
  );
}
