import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/memberTemplate.css";

import ArticleFlex from "../elements/ArticleFlex";
import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function MemberTemplate() {
  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div id="member-template" className="section">
      <div className="post-container">
        {/* Header */}
        <div id="member-info-header">
          <div>
            <div id="member-info-img" />
          </div>
          <div>
            <h1 className="w700 vbg-text small-ls">Member & Staff</h1>
            <hr className="small-blue-hr" />
            <div id="member-name">
              <h1 className="w700 bg-text small-ls sarabun">ชื่อ นามสกุล</h1>
              <p className="w500 sm-text small-ls member-choice red-choice white-text sarabun">
                นักวิจัย
              </p>
            </div>

            <hr className="small-blue-hr" />

            <div id="member-info-contact">
              <p className="w500 vsm-text small-ls sarabun">ตำแหน่ง</p>
              <p className="w500 vsm-text small-ls blue-text">
                contact@qx.kmutt.ac.th
              </p>
              <p className="w500 vsm-text small-ls">
                Introduction text Introduction text Introduction text
                Introduction text Introduction text Introduction text
                Introduction text
              </p>
            </div>
          </div>
        </div>

        {/* Research */}
        <div className="member-info-work">
          <h1 className="w700 nm-text small-ls">Research</h1>
          <div id="mb-info-long-flex" onClick={() => linkPath("/research-post")}>
            <ArticleLongFlex />
            <ArticleLongFlex />
          </div>
        </div>

        {/* Research */}
        <div className="member-info-work">
          <h1 className="w700 nm-text small-ls">Research</h1>
          <div id="mb-info-flex" onClick={() => linkPath("/article-post")}>
            <ArticleFlex />
            <ArticleFlex />
            <ArticleFlex />
          </div>
        </div>
      </div>
    </div>
  );
}
