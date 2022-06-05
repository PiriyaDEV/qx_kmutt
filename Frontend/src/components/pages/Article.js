import React, { useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { fetchArticle , fetchTag } from "../../redux";

import ArticleFlex from "../elements/ArticleFlex";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/article.css";

import qxArticleLogo from "../../assets/images/home/image 15.png";

export default function Article() {
  const articles = useSelector(state => state.articles.articles);
  const tags = useSelector(state => state.tags.tags);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchArticle(9));
    dispatch(fetchTag());
  }, [dispatch]);

  return (
    <div id="article-page" className="section">
      <div>
        <div className="section">
          <div className="page-container">
            {/* Header */}
            <div id="article-header">
              {/* Temp Pic */}
              <div>
                <img id="article-logo" src={qxArticleLogo} alt="" />
              </div>
              <div id="article-header-text">
                <div>
                  <h1 className="vbg-text w700 sarabun">{t('Article.Articles')}</h1>
                  <hr className="small-blue-hr" />
                  <p className="sm-text w500 small-ls sarabun">
                  {t('Article.ArticleDescription')}
                  </p>
                </div>

                <div>
                  <hr className="small-grey-hr" />
                </div>
              </div>
            </div>

            {/* Choice */}
            <div id="article-tag" className="section">
            {tags && tags.map((tag,index) => (
              <h1 className="sm-text w500 blue-text pointer sarabun" key={index}>
                #{tag.attributes.tag_name}
              </h1>
            ))}  
            </div>
          </div>
        </div>
        <div className="post-container">
          <div id="article-list">
            {articles &&
              articles.map((article, index) => (
                <div key={index}>
                  <ArticleFlex data={article} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
