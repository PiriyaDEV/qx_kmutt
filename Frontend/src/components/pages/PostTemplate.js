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
              <ArticleLongFlex type={"post"}/>
              <ArticleLongFlex type={"post"}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
