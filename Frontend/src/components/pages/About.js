import React from "react";
import { useTranslation } from "react-i18next";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/about.css";

import qxArticleLogo from "../../assets/images/home/image 15.png";
import fb from "../../assets/images/aboutus/FBicon.svg"

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about-page" className="section">
      <div className="page-container">
        <div className="section">
          <img id="about-logo" src={qxArticleLogo} alt="" />
        </div>

        {/* Header */}
        <div className="about-header">
          <h1 className="vbg-text w700 quicksand">{t('About.AboutTitle')}</h1>
          <hr className="small-blue-hr" />
          <p className="xm-text w500 sarabun">
            {t('About.AboutDescription')}
          </p>
        </div>

        {/* Collab */}
        <div id="about-collab" className="section">
          <div>
            <hr className="small-grey-hr" />
            <h1 className="nm-text w700">{t('About.Collaboration')}</h1>
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

        {/* Header */}
        <div className="about-header about-fb">
          <h1 className="vbg-text w700 quicksand">ติดตามเราได้ที่</h1>
          <hr className="small-blue-hr" />
          <div className="about-fb-info">
            <img src={fb} alt=""/>
            <h1 className="w700 quicksand nm-text">QX-KMUTT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
