import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle, fetchProject, fetchMember } from "../../redux";
import { useTranslation } from "react-i18next";

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
  const articles = useSelector((state) => state.articles.articles);
  const projects = useSelector((state) => state.projects.projects);
  const members = useSelector((state) => state.members.members);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchArticle(9));
    dispatch(fetchProject(3));
    dispatch(fetchMember(6));
  }, [dispatch]);

  const refreshMember = () => {
    setRefresh(!refresh);
  };

  const linkPath = (path) => {
    window.location.href = path;
  };

  const article = [];

  for (let i = 0; i < articles.length; i += 1) {
    article.push(
      <SwiperSlide key={`home-slide-${i}`} tag="li">
        <div className="section">
          <ArticleFlex data={articles[i]} />
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
              <h1 className="bg-home-text w400">{t("Home.Qx")}</h1>
              <p className="nm-text w400">
                {t("Home.QxDescription.1")} <br />
                {t("Home.QxDescription.2")}
              </p>
            </div>
          </div>

          {/* Home About */}
          <div id="home-about">
            <div className="section">
              <img className="orange-tri" src={orangeTriangle} alt="" />
              <h1 className="nm-text w700">{t("Home.About")}</h1>
              <img className="orange-tri" src={orangeTriangle} alt="" />
            </div>
            <p className="inter xm-text w500 sarabun">
              {t("Home.AboutDescription")}
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
          <h1 className="nm-text white-text w700">{t("Home.Articles")}</h1>
          {article && (
            <Swiper
              id="home-swiper"
              tag="section"
              wrapperTag="ul"
              // spaceBetween={80}
              navigation={{
                prevEl: ".prev-article-arrow",
                nextEl: ".next-article-arrow",
              }}
              slidesPerView={3}
              loop={false}
              // loopAdditionalSlides={10}
              centeredSlides={false}
              // autoplay={{
              //   delay: 2500,
              // }}
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
            &lt;&lt; {t("Home.ShowAll")} &gt;&gt;
          </h1>
          <img className="prev-article-arrow" src={leftArrow} alt="" />
          <img className="next-article-arrow" src={rightArrow} alt="" />
        </div>
      </div>

      {/* Project */}
      <div id="home-project" className="section">
        <div className="page-container">
          <div id="project-box">
            <h1 className="nm-text w700">{t("Home.Project")}</h1>
            <div className="project-grid">
              <div id="project-info">
                <hr className="blue-hr" />
                <p className="vsm-text w500 sarabun">
                  {t("Home.ProjectDescription.1")} <br />{" "}
                  {t("Home.ProjectDescription.2")}
                </p>
                <p
                  className="vsm-text w500 blue-text sarabun pointer"
                  onClick={() => linkPath("/project")}
                >
                  {t("Home.ShowAll")} &gt;&gt;
                </p>
              </div>
              {/* <div className="temp-project"/> */}
              {projects.map((project, index) => (
                <div key={index} onClick={() => linkPath("/project-post/" + project.attributes.slug)} className="temp-project">{project.attributes.title}</div>
              ))}
            </div>

            <div className="project-grid">
              {/* <div className="temp-project" />
              <div className="temp-project" /> */}
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
              <h1 className="nm-text w700">{t("Home.Member")}</h1>
              <img className="orange-tri" src={orangeTriangle} alt="" />
              <p
                className="vsm-text w500 blue-text sarabun pointer"
                onClick={() => linkPath("/member")}
              >
                {t("Home.DetailAll")} &gt;&gt;
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
              {
                members.map((member,index) => 
                <MemberFlex key={index} data={member} color="red" />
                )
              }
              {/* <MemberFlex  color="red" />
              <MemberFlex  color="blue" />
              <MemberFlex  color="red" /> */}
            </div>
            <div className="member-flex-container">
              {/* <MemberFlex color="red" />
              <MemberFlex  color="blue" />
              <MemberFlex color="red" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration */}
      <div id="collab" className="section">
        <div className="page-container">
          <div className="home-header">
            <img className="orange-tri" src={blueTriangle} alt="" />
            <h1 className="nm-text w700">{t("Home.Collaboration")}</h1>
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
