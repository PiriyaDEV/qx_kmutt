import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchResearch, fetchResearchByPage } from "../../redux";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/research.css";

import ArticleLongFlex from "../elements/ArticleLongFlex";

export default function Research() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const researches = useSelector((state) => state.researches.researches);
  const isLastPage = useSelector(
    (state) => state.researches.meta.pagination.isLastPage
  );
  const [selectedCategory, setSelectedCategory] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const PAGE_SIZE = 5;

  useEffect(() => {
    dispatch(fetchCategory());
    setSelectedCategory(
      queryParams.get("category") ? [queryParams.get("category")] : []
    );
  }, [dispatch]);

  const linkPath = (path) => {
    window.location.href = path;
  };

  const clickSelected = (category) => {
    if (selectedCategory.includes(category)) {
      const index = selectedCategory.indexOf(category);
      if (index > -1) {
        setSelectedCategory(
          selectedCategory.filter((element) => element !== category)
        );
      }
    } else {
      setSelectedCategory((oldArray) => [...oldArray, category]);
    }
  };

  const fetchMore = () => {
    dispatch(fetchResearchByPage(PAGE_SIZE, selectedCategory));
  };
  //filter Research
  useEffect(() => {
    dispatch(fetchResearch(PAGE_SIZE, selectedCategory));
  }, [selectedCategory]);

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
          {categories &&
            categories.map((category, index) => (
              <h1
                key={index}
                onClick={() => clickSelected(category.name)}
                className={`sm-text w500 tag blue-text sarabun text-center ${
                  selectedCategory.includes(category.name) ? "active-tag" : null
                }`}
              >
                {category.name}
              </h1>
            ))}
        </div>

        <div>
          {/* List */}
          <div id="research-list">
            {researches.map((research, index) => (
              <div
                key={index}
                onClick={() => linkPath("/research-post/" + research.slug)}
              >
                <ArticleLongFlex data={research} page="research" />
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

        {!isLastPage && researches.length > 0 && (
          <div
            onClick={() => fetchMore()}
            className="showmore blue-text sm-text w500 pointer"
          >
            แสดงเพิ่ม ...
          </div>
        )}
        {!isLastPage && researches.length === 0 && (
          <div className="showmore grey-text sm-text w500">ไม่พบข้อมูล ...</div>
        )}
      </div>
    </div>
  );
}
