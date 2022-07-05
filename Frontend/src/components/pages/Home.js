import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchResearch,
  fetchActivity,
  fetchMember,
  fetchArticle,
} from "../../redux";
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
import ArticleLongFlex from "../elements/ArticleLongFlex";
import ActivityFlex from "../elements/ActivityFlex";
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

import logoFrame from "../../assets/images/home/image 14.svg";

import refreshIcon from "../../assets/images/home/refresh.png";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const researches = useSelector((state) => state.researches.researches);
  const activities = useSelector((state) => state.activities.activities);
  const members = useSelector((state) => state.members.members);
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // console.log(articles)

  useEffect(() => {
    dispatch(fetchResearch(9));
    dispatch(fetchActivity(3));
    dispatch(fetchMember(6));
    dispatch(fetchArticle(2));
  }, [dispatch]);

  const refreshMember = () => {
    setRefresh(!refresh);
  };

  const linkPath = (path) => {
    window.location.href = path;
  };

  const research = [];

  for (let i = 0; i < researches.length; i += 1) {
    research.push(
      <SwiperSlide key={`home-slide-${i}`} tag="li">
        <div className="section">
          <ArticleFlex data={researches[i]} />
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
            <div id="home-landing-info">
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
          <div id="research-tags">
            <div className="sm-text w600 white-text">QML</div>
            <div className="sm-text w600 white-text">QuantumProgramming</div>
            <div className="sm-text w600 white-text">Benmark</div>
          </div>
          {research && (
            <Swiper
              id="home-swiper"
              tag="section"
              wrapperTag="ul"
              // spaceBetween={80}
              navigation={{
                prevEl: ".prev-article-arrow",
                nextEl: ".next-article-arrow",
              }}
              pagination={{ clickable: true }}
              slidesPerView={1}
              loop={true}
              // centeredSlides={true}
              // autoplay={{
              //   delay: 2500,
              // }}
              breakpoints={{
                960: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
            >
              {research}
            </Swiper>
          )}

          <h1
            className="vsm-text white-text w700 pointer"
            onClick={() => linkPath("/research")}
          >
            &lt;&lt; {t("Home.ShowAll")} &gt;&gt;
          </h1>
          <img className="prev-article-arrow" src={leftArrow} alt="" />
          <img className="next-article-arrow" src={rightArrow} alt="" />
        </div>
      </div>

      {/* Activity */}
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
                  onClick={() => linkPath("/activity")}
                >
                  {t("Home.ShowAll")} &gt;&gt;
                </p>
              </div>
              {/* <div className="temp-project" /> */}
              {activities.slice(0, 3).map((activity, index) => (
                <div
                  key={index}
                  onClick={() =>
                    linkPath("/activity-post/" + activity.attributes.slug)
                  }
                >
                  <ActivityFlex data={activity.attributes} />
                </div>
              ))}
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
              <div>
                <img className="orange-tri" src={orangeTriangle} alt="" />
                <h1 className="nm-text w700">{t("Home.Member")}</h1>
                <img className="orange-tri" src={orangeTriangle} alt="" />
              </div>
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
              {members.map((member, index) => (
                <MemberFlex key={index} data={member} color="red" />
              ))}
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

      <div id="home-article">
        <div className="section">
          <div className="page-container">
            <div className="home-header">
              <div>
                <img className="orange-tri" src={orangeTriangle} alt="" />
                <h1 className="nm-text w700">Article</h1>
                <img className="orange-tri" src={orangeTriangle} alt="" />
              </div>

              <p
                className="vsm-text w500 blue-text sarabun pointer"
                onClick={() => linkPath("/article")}
              >
                {t("Home.DetailAll")} &gt;&gt;
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div id="home-article-container" className="page-container">
            <ArticleLongFlex
              data={articles[articles.length - 2]}
              type={"post"}
            />
            <ArticleLongFlex
              data={articles[articles.length - 1]}
              type={"post"}
            />
          </div>
        </div>
      </div>

      {/* Collaboration */}
      <div id="collab" className="section">
        <div className="page-container">
          <div className="home-header">
            <div>
              <img className="orange-tri" src={blueTriangle} alt="" />
              <h1 className="nm-text w700">{t("Home.Collaboration")}</h1>
              <img className="orange-tri" src={blueTriangle} alt="" />
            </div>
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
