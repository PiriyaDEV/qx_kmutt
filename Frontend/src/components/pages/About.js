import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/about.css";

import qxArticleLogo from "../../assets/images/home/image 15.png";

export default function About() {
  return (
    <div id="about-page" className="section">
      <div className="post-container">
        <div className="section">
          <img id="about-logo" src={qxArticleLogo} alt="" />
        </div>

        {/* Header */}
        <div id="about-header">
          <h1 className="vbg-text w700 sarabun">เกี่ยวกับเรา</h1>
          <hr className="small-blue-hr" />
          <p className="xm-text w500 sarabun">
            ตัวอักษร Q มาจากตัวอักษรตัวแรกของคำว่า Quantum
            โดยตัวอักษรนี้จะสร้างให้เสมอว่าเกิดจากเส้นเดียวกันแต่มีการพลิก
            และถูกดัดโค้งให้กลายเป็นตัว Q ในที่สุด เพื่อสื่อถึงความต่อเนื่อง
            และความเป็นหนึ่งเดียวกัน หูของแมว
            มาจากการสร้างเอกลักษณ์และเพิ่มความหมายของตราสัญลักษณ์ให้สามารถสื่อถึงแมวจาก
            Schrodinger's Cat ซึ่งเป็นหนึ่งใน concept ในการอธิบาย Quantum
          </p>
        </div>

        {/* Collab */}
        <div id="about-collab" className="section">
          <div>
            <hr className="small-grey-hr" />
            <h1 className="nm-text w700">Collaboration</h1>
          </div>
        </div>

        {/* Temp List */}
        <div id="about-collab-list">
          <div className="section">
            <div className="about-collab-temp" />
          </div>
          <div className="section">
            <div className="about-collab-temp" />
          </div>
          <div className="section">
            <div className="about-collab-temp" />
          </div>
          <div className="section">
            <div className="about-collab-temp" />
          </div>
          <div className="section">
            <div className="about-collab-temp" />
          </div>
          <div className="section">
            <div className="about-collab-temp" />
          </div>
        </div>
      </div>
    </div>
  );
}
