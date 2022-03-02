import React from "react";

import ArticleFlex from "../elements/ArticleFlex";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/article.css";

import qxArticleLogo from "../../assets/images/home/image 15.png";

export default function Article() {
  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div id="article-page" className="section">
      <div>
        <div className="section">
          <div className="page-container">
            {/* Header */}
            <div id="article-header">
              {/* Temp Pic */}
              <div>
                <img id="article-logo" src={qxArticleLogo} alt="" />
              </div>
              <div id="article-header-text">
                <div>
                  <h1 className="vbg-text w700 sarabun">บทความที่น่าสนใจ</h1>
                  <hr className="small-blue-hr" />
                  <p className="sm-text w500 small-ls sarabun">
                    รวมบทความเกี่ยวกับ Quantum Computing ซึ่งเขียน หรือ
                    แปลโดยทีม QX KMUTT
                  </p>
                </div>

                <div>
                  <hr className="small-grey-hr" />
                </div>
              </div>
            </div>

            {/* Choice */}
            <div id="article-tag" className="section">
              <h1 className="sm-text w500 blue-text pointer sarabun">
                #QuantumComputing
              </h1>
              <h1 className="sm-text w500 blue-text pointer sarabun">#Quantum101</h1>
              <h1 className="sm-text w500 blue-text pointer sarabun">#QuantumXX</h1>
              <h1 className="sm-text w500 blue-text pointer sarabun">#QXEvent</h1>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div id="article-list">
            <div onClick={() => linkPath("/article-post")}>
              <ArticleFlex />
            </div>
            <div onClick={() => linkPath("/article-post")}>
              <ArticleFlex />
            </div>
            <div onClick={() => linkPath("/article-post")}>
              <ArticleFlex />
            </div>
            <div onClick={() => linkPath("/article-post")}>
              <ArticleFlex />
            </div>
            <div onClick={() => linkPath("/article-post")}>
              <ArticleFlex />
            </div>
            <div onClick={() => linkPath("/article-post")}>
              <ArticleFlex />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
