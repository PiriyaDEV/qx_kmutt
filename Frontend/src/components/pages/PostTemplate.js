import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/postTemplate.css";

import postArrow from "../../assets/images/icon/Vector 1.png";

import ArticleLongFlex from "../elements/ArticleLongFlex";
import ArticleFlex from "../elements/ArticleFlex";

import {
  fetchArticleBySlug,
  fetchActivityBySlug,
  fetchResearchBySlug,
} from "../../redux";

export default function PostTemplate(props) {
  const article = useSelector((state) => state.articles.article);
  const activity = useSelector((state) => state.activities.activity);
  const research = useSelector((state) => state.researches.research);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [post, setPost] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    if (props.type === "article") {
      dispatch(fetchArticleBySlug(slug));
    } else if (props.type === "activity") {
      dispatch(fetchActivityBySlug(slug));
    } else {
      dispatch(fetchResearchBySlug(slug));
    }
  }, [dispatch, slug, props]);

  useEffect(() => {
    if (article) {
      setPost(article);
    }
  }, [article]);

  useEffect(() => {
    if (activity) {
      setPost(activity);
    }
  }, [activity]);

  useEffect(() => {
    if (research) {
      setPost(research);
    }
  }, [research]);

  // useEffect(() => {
  //   if (articles) {

  //     if (result) {
  //       setPost(result);
  //     }
  //   }
  // }, [article, post, slug]);

  const linkPath = (value) => {
    let path = "/" + value;
    window.location.href = path;
  };

  const linkNewTab = (path) => {
    window.open(path);
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
            {props.type === "article" && t("PostTemplate.PostTitle.article")}
            {props.type === "research" && t("PostTemplate.PostTitle.research")}
            {props.type === "activity" && t("PostTemplate.PostTitle.project")}
          </p>
          <img className="post-arrow" src={postArrow} alt="" />
          {post && (
            <p className="vsm-text w700 blue-text small-ls sarabun">
              {post.title}
            </p>
          )}
        </div>

        {/* Title */}
        <div id="post-title">
          {post && <h1 className="bg-text w700 sarabun">{post.title}</h1>}
          <hr className="small-blue-hr" />
        </div>

        {/* Image */}

        {post && props.type === "article" && (
          <div>
            <img src={post.cover_url} alt="" className="article-img" />
          </div>
        )}

        {post && props.type !== "article" && (
          <div>
            <img src={post.cover_url} alt="" className="research-img" />
            {/* <div className="research-img" /> */}
          </div>
        )}

        {/* Strapi */}
        {post && (
          <div
            className="xm2-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* Tag */}
        <div id="post-tag">
          {post.tags &&
            post.tags.map((tag, index) => (
              <h1
                className="vsm-text w500 small-ls blue-text pointer"
                key={index}
              >
                #{tag.name}
              </h1>
            ))}
        </div>

        {props.type === "research" && (
          <div>
            {post.research_database_url && (
              <p className="writer sm-text w500 small-ls sarabun">
                {t("PostTemplate.Link")} :{" "}
                <span
                  onClick={() => linkNewTab(post.research_database_url)}
                  style={{ cursor: `pointer` }}
                  className="blue-text"
                >
                  {t("PostTemplate.Backto")}
                </span>
              </p>
            )}

            <hr className="post-grey-hr small-grey-hr" />
          </div>
        )}

        {post.authors && (
          <p className="writer sm-text w500 small-ls sarabun">
            ผู้เขียน :{" "}
            {post.authors
              .map((author, index) => `${author.firstname} ${author.lastname}`)
              .join(", ")}
          </p>
        )}

        {props.type !== "research" && (
          <hr className="post-grey-hr small-grey-hr" />
        )}

        {/* List */}
        {props.type === "article" && (
          <div id="article-post-list" className="post-list">
            <p className="writer sm-text w700 small-ls sarabun">
              {t("PostTemplate.Article")}
            </p>
            <div>
              <ArticleFlex type={"article"} />
              <ArticleFlex type={"article"} />
              <ArticleFlex type={"article"} />
            </div>
          </div>
        )}

        {props.type === "activity" && (
          <div id="project-post-list" className="post-list">
            <p className="writer sm-text w700 small-ls sarabun">
              {t("PostTemplate.Article")}
            </p>
            <div>
              <ArticleLongFlex data={activity} type={"post"} />
              <ArticleLongFlex data={activity} type={"post"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
