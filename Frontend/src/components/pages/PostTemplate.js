import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/postTemplate.css";

import postArrow from "../../assets/images/icon/Vector 1.png";

import ArticleLongFlex from "../elements/ArticleLongFlex";
import ArticleFlex from "../elements/ArticleFlex";

export default function PostTemplate(props) {
  const linkPath = (value) => {
    let path = "/" + value;
    window.location.href = path;
  };

  const content = "<h1 style=\"text-align:justify;\">The three greatest things you learn from traveling</h1><hr><p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p><figure class=\"table\"><table><tbody><tr><td><figure class=\"image image-style-align-left image_resized\" style=\"width:63.54%;\"><img src=\"http://localhost:1337/uploads/177_5bf624808dea6_a_965283c47e.jpg\" alt=\"sad\"></figure></td><td style=\"vertical-align:top;\"><h2>Appreciation of diversity</h2><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p><p>&nbsp;</p><blockquote><p>The real voyage of discovery consists not in seeking new landscapes, but having new eyes.</p><p><strong>Marcel Proust</strong></p></blockquote><p>&nbsp;</p></td></tr></tbody></table></figure><h3>Improvisation</h3><p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p><ul><li>buy the ticket</li><li>start your adventure</li></ul>"

  return (
    <div id="post-template" className="section">
      <div className="post-container">
        {/* Header */}
        <div id="post-header">
          <p
            className="vsm-text w700 blue-text small-ls pointer sarabun"
            onClick={() => linkPath(props.type)}
          >
            {props.type === "article" && "รวมบทความ"}
            {props.type === "research" && "รวมงานวิจัย"}
            {props.type === "project" && "รวม Project"}
          </p>
          <img className="post-arrow" src={postArrow} alt="" />
          <p className="vsm-text w700 blue-text small-ls sarabun">
            ชื่อ บทความ จะแสดงตรงนี้ ความยาวของชื่อ ไม่ควรเกิน 1 - 2 บรรทัด
            เพราะมันจะยาวไป
          </p>
        </div>

        {/* Title */}
        <div id="post-title">
          <h1 className="bg-text w700 sarabun">
            ชื่อบทความจะแสดงตรงนี้ ความยาวของชื่อ ไม่ควรเกิน 1 - 2 บรรทัด
            เพราะมันจะยาวไป
          </h1>
          <hr className="small-blue-hr" />
        </div>

        {/* Image */}
        {props.type === "article" ? (
          <div>
            <div className="article-img" />
          </div>
        ) : (
          <div>
            <div className="research-img" />
          </div>
        )}

        {/* Strapi */}
        <div className="xm2-text" dangerouslySetInnerHTML={{ __html: content }} />

        {/* Tag */}
        <div id="post-tag">
          <h1 className="vsm-text w500 small-ls blue-text pointer">
            #QuantumComputing
          </h1>
          <h1 className="vsm-text w500 small-ls blue-text pointer">
            #QuantumXX
          </h1>
          <h1 className="vsm-text w500 small-ls blue-text pointer">
            #Quantum101
          </h1>
          <h1 className="vsm-text w500 small-ls blue-text pointer">#QXEvent</h1>
        </div>

        {props.type === "research" && (
          <div>
            <p className="writer sm-text w500 small-ls sarabun">
              Link : <span className="blue-text">ไปยังฐานข้อมูลวิจัย</span>
            </p>

            <hr className="post-grey-hr small-grey-hr" />
          </div>
        )}

        <p className="writer sm-text w500 small-ls sarabun">
          ผู้เขียน : ชื่อสมาชิก/Admin
        </p>

        {props.type !== "research" && (
          <hr className="post-grey-hr small-grey-hr" />
        )}

        {/* List */}
        {props.type === "article" && (
          <div id="article-post-list" className="post-list">
            <p className="writer sm-text w700 small-ls sarabun">
              บทความอื่นที่ใกล้เคียงกัน
            </p>
            <div>
              <ArticleFlex />
              <ArticleFlex />
              <ArticleFlex />
            </div>
          </div>
        )}

        {props.type === "project" && (
          <div id="project-post-list" className="post-list">
            <p className="writer sm-text w700 small-ls sarabun">
              บทความอื่นที่ใกล้เคียงกัน
            </p>
            <div>
              <ArticleLongFlex type={"post"} />
              <ArticleLongFlex type={"post"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
