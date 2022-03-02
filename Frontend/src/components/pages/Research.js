import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/research.css";

import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function Research() {
  const linkPath = (path) => {
    window.location.href = path;
  };
  return (
    <div id="research" className="section">
      <div>
        <div className="section">
          <div className="page-container">
            {/* Header */}
            <div id="research-header">
              <div>
                <h1 className="vbg-text w700">Research</h1>
                <hr className="small-blue-hr" />
                <p className="sm-text w500 small-ls inter">
                  รวมโครงการและกิจกรรม ที่จัดทำขึ้นโดยทีม QX KMUTT{" "}
                </p>
              </div>

              <div>
                <hr className="small-grey-hr" />
              </div>
            </div>

            {/* Choice */}
            <div id="research-tag" className="section">
              <h1 className="sm-text w500 tag blue-text">Journal</h1>
              <h1 className="sm-text w500 tag blue-text">Proceeding</h1>
              <h1 className="sm-text w500 tag blue-text">Senior Projects</h1>
            </div>
          </div>
        </div>
        <div className="post-container">
          {/* List */}
          <div id="research-list">
            <div onClick={() => linkPath("/research-post")}>
              <ArticleLongFlex />
            </div>
            <div onClick={() => linkPath("/research-post")}>
              <ArticleLongFlex />
            </div>
            <div onClick={() => linkPath("/research-post")}>
              <ArticleLongFlex />
            </div>
            <div onClick={() => linkPath("/research-post")}>
              <ArticleLongFlex />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
