import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
} from "swiper";
import "swiper/swiper-bundle.css";

import ArticleFlex from "../elements/ArticleFlex";
import MemberFlex from "../elements/MemberFlex";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/home.css";

import qxLogo from "../../assets/images/home/QX-logo.png";
import orangeTriangle from "../../assets/images/home/Polygon 1.png";
import blueTriangle from "../../assets/images/home/Polygon 6.png";
import bg1 from "../../assets/images/home/bg1.png";
import bg2 from "../../assets/images/home/bg2.png";

import leftArrow from "../../assets/images/home/Polygon 9.png";
import rightArrow from "../../assets/images/home/Polygon 8.png";

import logoFrame from "../../assets/images/home/image 14.png";

import refreshIcon from "../../assets/images/home/refresh.png";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  const refreshMember = () => {
    setRefresh(!refresh);
  };

  const linkPath = (path) => {
    window.location.href = path;
  };

  const article = [];

  for (let i = 0; i < 10; i += 1) {
    article.push(
      <SwiperSlide key={`home-slide-${i}`} tag="li">
        <div>
          <ArticleFlex />
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div>
      <div id="home" className="section">
        <div className="page-container">
          {/* Landing */}
          <div id="landing-section">
            <div>
              <img id="qx-logo" src={qxLogo} alt="" />
            </div>
            <div>
              <h1 className="bg-home-text w400">QX KMUTT</h1>
              <p className="nm-text w400">
                Quantum Computing and <br />
                Information Research Centre
              </p>
            </div>
          </div>

          {/* Home About */}
          <div id="home-about">
            <div className="section">
              <img className="orange-tri" src={orangeTriangle} alt="" />
              <h1 className="nm-text w700">About</h1>
              <img className="orange-tri" src={orangeTriangle} alt="" />
            </div>
            <p className="inter xm-text w500 sarabun">
              ตัวอักษร Q มาจากตัวอักษรตัวแรกของคำว่า Quantum
              โดยตัวอักษรนี้จะสร้างให้เสมอว่าเกิดจากเส้นเดียวกันแต่มีการพลิก
              และถูกดัดโค้งให้กลายเป็นตัว Q ในที่สุด เพื่อสื่อถึงความต่อเนื่อง
              และความเป็นหนึ่งเดียวกัน หูของแมว
              มาจากการสร้างเอกลักษณ์และเพิ่มความหมายของตราสัญลักษณ์ให้สามารถสื่อถึงแมวจาก
              Schrodinger's Cat ซึ่งเป็นหนึ่งใน concept ในการอธิบาย Quantum
            </p>
          </div>
        </div>
      </div>
      {/* Article */}
      <div
        id="article"
        className="section"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div id="article-container" className="page-container">
          <h1 className="nm-text white-text w700">Articles</h1>
          {article && (
            <Swiper
              id="home-swiper"
              tag="section"
              wrapperTag="ul"
              spaceBetween={80}
              navigation={{
                prevEl: ".prev-article-arrow",
                nextEl: ".next-article-arrow",
              }}
              
              slidesPerView={3}
              loop
              loopAdditionalSlides={100}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 3,
                },
                700: {
                  slidesPerView: 3,
                },
                1020: {
                  slidesPerView: 3,
                },
              }}
            >
              {article}
            </Swiper>
          )}

          <h1
            className="vsm-text white-text w700 sarabun pointer"
            onClick={() => linkPath("/article")}
          >
            &lt;&lt; แสดงทั้งหมด &gt;&gt;
          </h1>
          <img className="prev-article-arrow" src={leftArrow} alt="" />
          <img className="next-article-arrow" src={rightArrow} alt="" />
        </div>
      </div>

      {/* Project */}
      <div id="home-project" className="section">
        <div className="page-container">
          <div id="project-box">
            <h1 className="nm-text w700">Project</h1>
            <div className="project-grid">
              <div id="project-info">
                <hr className="blue-hr" />
                <p className="vsm-text w500 sarabun">
                  โครงการที่น่าสนใจของ QX <br /> ทั้งในอดีต ตลอดจนปัจจุบัน
                </p>
                <p
                  className="vsm-text w500 blue-text sarabun pointer"
                  onClick={() => linkPath("/project")}
                >
                  แสดงทั้งหมด &gt;&gt;
                </p>
              </div>
              <div className="temp-project" />
            </div>

            <div className="project-grid">
              <div className="temp-project" />
              <div className="temp-project" />
            </div>
          </div>
        </div>
        <img className="logoframe" src={logoFrame} alt="" />
      </div>

      {/* Member */}
      <div id="member">
        <div className="section">
          <div className="page-container">
            <div className="home-header">
              <img className="orange-tri" src={orangeTriangle} alt="" />
              <h1 className="nm-text w700">Member</h1>
              <img className="orange-tri" src={orangeTriangle} alt="" />
              <p
                className="vsm-text w500 blue-text sarabun pointer"
                onClick={() => linkPath("/member")}
              >
                รายละเอียดทั้งหมด &gt;&gt;
              </p>
            </div>
          </div>
        </div>
        <div
          id="member-section"
          style={{ backgroundImage: `url(${bg2})` }}
          className="section"
        >
          <div className="page-container">
            <img
              id="refresh-logo"
              src={refreshIcon}
              alt=""
              onClick={() => refreshMember()}
              className={`${refresh ? "rotate" : "rotate rotate-down"}`}
            />
            <div className="member-flex-container">
              <MemberFlex color="red" />
              <MemberFlex color="blue" />
              <MemberFlex color="red" />
            </div>
            <div className="member-flex-container">
              <MemberFlex color="red" />
              <MemberFlex color="blue" />
              <MemberFlex color="red" />
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration */}
      <div id="collab" className="section">
        <div className="page-container">
          <div className="home-header">
            <img className="orange-tri" src={blueTriangle} alt="" />
            <h1 className="nm-text w700">Collaboration</h1>
            <img className="orange-tri" src={blueTriangle} alt="" />
          </div>

          <div id="collab-list">
            <div className="temp-collab" />
            <div className="temp-collab" />
            <div className="temp-collab" />
            <div className="temp-collab" />
            <div className="temp-collab" />
          </div>
        </div>
      </div>
    </div>
  );
}
