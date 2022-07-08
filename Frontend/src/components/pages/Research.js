import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchResearch } from "../../redux";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/research.css";

import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function Research() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const researches = useSelector((state) => state.researches.researches);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchResearch(3));
  }, [dispatch]);

  const linkPath = (path) => {
    window.location.href = path;
  };

  const [researchFilter, setResearchFilter] = useState([false, false, false]);

  const selectFilter = (type) => {
    let temp = [...researchFilter];
    if (type === "journal") {
      temp[0] = !temp[0];
    } else if (type === "proceeding") {
      temp[1] = !temp[1];
    } else {
      temp[2] = !temp[2];
    }
    setResearchFilter(temp);
  };

  return (
    <div id="research" className="section">
        <div className="page-container">
          {/* Header */}
          <div id="research-header">
            <div>
              <h1 className="vbg-text w700">{t("Research.Research")}</h1>
              <hr className="small-blue-hr" />
              <p className="sm-text w500 small-ls sarabun">
                {t("Research.ResearchDescription")}
              </p>
            </div>

            <div>
              <hr className="small-grey-hr" />
            </div>
          </div>

          {/* Choice */}
          <div id="research-tag" className="section">
            <h1
              onClick={() => selectFilter("journal")}
              className={`sm-text w500 tag blue-text sarabun text-center ${
                researchFilter[0] ? "active-tag" : null
              }`}
            >
              {t("Research.Journal")}
            </h1>
            <h1
              onClick={() => selectFilter("proceeding")}
              className={`sm-text w500 tag blue-text sarabun text-center ${
                researchFilter[1] ? "active-tag" : null
              }`}
            >
              {t("Research.Proceeding")}
            </h1>
            <h1
              onClick={() => selectFilter("sn-project")}
              className={`sm-text w500 tag blue-text sarabun text-center ${
                researchFilter[2] ? "active-tag" : null
              }`}
            >
              {t("Research.SeniorP")}
            </h1>
          </div>

          <div>
          {/* List */}
          <div id="research-list">
            {researches.map((research, index) => (
              <div
                key={index}
                onClick={() =>
                  linkPath("/research-post/" + research.attributes.slug)
                }
              >
                <ArticleLongFlex data={research} page="research"/>
              </div>
            ))}
            {/* <div onClick={() => linkPath("/research-post")}>
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
            </div> */}
          </div>
        </div>

        <div className="showmore blue-text sm-text w500 pointer">แสดงเพิ่ม ...</div>
        </div>
    </div>
  );
}
