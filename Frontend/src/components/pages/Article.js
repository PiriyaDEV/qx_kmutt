import React, { useEffect ,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchArticle, fetchTag ,fetchArticleByPage } from "../../redux";

import ArticleFlex from "../elements/ArticleFlex";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/article.css";

import qxArticleLogo from "../../assets/images/home/image 15.png";

export default function Article() {
  const articles = useSelector((state) => state.articles.articles);
  const tags = useSelector((state) => state.tags.tags);
  const isLastPage = useSelector(
    (state) => state.articles.meta.pagination.isLastPage
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [selectedTag, setSelectedTag] = useState([]);
  const PAGE_SIZE = 6;

  useEffect(() => {
    // dispatch(fetchArticle(PAGE_SIZE));
    dispatch(fetchTag());
  }, [dispatch]);
  
  const clickSelected = (tag) => {
    if (selectedTag.includes(tag)) {
      const index = selectedTag.indexOf(tag);
      if (index > -1) {
        setSelectedTag(
          selectedTag.filter((element) => element !== tag)
        );
      }
    } else {
      setSelectedTag((oldArray) => [...oldArray, tag]);
    }
  };

  const fetchMore = () => {
    dispatch(fetchArticleByPage(PAGE_SIZE, selectedTag));
  };

  useEffect(() => {
    dispatch(fetchArticle(PAGE_SIZE, selectedTag));
}, [selectedTag]);

  return (
    <div id="article-page" className="section">
      <div className="page-container">
        {/* Header */}
        <div id="article-header">
          {/* Temp Pic */}
          <div>
            <img id="article-logo" src={qxArticleLogo} alt="" />
          </div>
          <div id="article-header-text">
            <div>
              <h1 className="vbg-text w700 sarabun">{t("Article.Articles")}</h1>
              <hr className="small-blue-hr" />
              <p className="sm-text w500 small-ls sarabun">
                {t("Article.ArticleDescription")}
              </p>
            </div>

            <div>
              <hr className="small-grey-hr" />
            </div>
          </div>
        </div>

        {/* Choice */}
        <div id="article-tag" className="section">
          {tags &&
            tags.map((tag, index) => (
              <h1
                onClick={() => clickSelected(tag.name)}
                className={`tag sm-text w500 blue-text pointer sarabun ${
                selectedTag.includes(tag.name) ? "active-tag" : null
                }`}
                key={index}
              >
                #{tag.name}
              </h1>
            ))}
        </div>
        <div>
          <div id="article-list">
            {articles &&
              articles.map((article, index) => (
                <div key={index} className="section">
                  <ArticleFlex data={article} type="article"/>
                </div>
              ))}
          </div>
        </div>
        {!isLastPage && articles.length > 0 && (
          <div
            onClick={() => fetchMore()}
            className="showmore blue-text sm-text w500 pointer"
          >
            แสดงเพิ่ม ...
          </div>
        )}
        { !isLastPage && articles.length === 0 && (
            <div
              className="showmore grey-text sm-text w500"
            >
              ไม่พบข้อมูล ...
            </div>
          )
        }
      </div>
    </div>
  );
}
