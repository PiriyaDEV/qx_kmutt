import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/project.css";

import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function Project() {
  return (
    <div id="project" className="section">
      <div className="page-container">
        {/* Header */}
        <div id="project-header">
          {/* Temp Pic */}
          <div>
            <div className="pj-blue-temp" />
            <div className="pj-grey-temp" />
          </div>
          <div id="project-header-text">
            <div>
              <h1 className="vbg-text w700">Project</h1>
              <hr className="small-blue-hr" />
              <p className="sm-text w500 small-ls inter">
                รวมโครงการและกิจกรรม ที่จัดทำขึ้นโดยทีม QX KMUTT{" "}
              </p>
            </div>

            <div>
              <hr className="small-grey-hr" />
            </div>
          </div>
        </div>

        {/* Choice */}
        <div id="project-tag" className="section">
          <h1 className="sm-text w500 tag blue-text">กิจกรรม</h1>
          <h1 className="sm-text w500 tag blue-text">โครงการ</h1>
        </div>

        {/* List */}
        <div id="project-list">
          <ArticleLongFlex />
          <ArticleLongFlex />
          <ArticleLongFlex />
        </div>
      </div>
    </div>
  );
}
