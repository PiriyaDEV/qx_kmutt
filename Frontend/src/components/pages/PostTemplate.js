import React, { useState , useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/postTemplate.css";

import postArrow from "../../assets/images/icon/Vector 1.png";

import ArticleLongFlex from "../elements/ArticleLongFlex";
import ArticleFlex from "../elements/ArticleFlex";
import ImageService from "../../services/image";

import { fetchArticleBySlug } from "../../redux";

export default function PostTemplate(props) {
  const article = useSelector(state => state.articles.article);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [post, setPost] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchArticleBySlug(slug));
  }, [dispatch,slug]);


  useEffect(() => {
    if(article) {
      setPost(article)
    }
  }, [article]);

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

  return (
    <div id="post-template" className="section">
      <div className="post-container">
        {/* Header */}
        <div id="post-header">
          <p
            className="vsm-text w700 blue-text small-ls pointer sarabun"
            onClick={() => linkPath(props.type)}
          >
            {props.type === "article" && t('PostTemplate.PostTitle.article')}
            {props.type === "research" && t('PostTemplate.PostTitle.research')}
            {props.type === "project" && t('PostTemplate.PostTitle.project')}
          </p>
          <img className="post-arrow" src={postArrow} alt="" />
          {post && (
            <p className="vsm-text w700 blue-text small-ls sarabun">
              {post.attributes.title}
            </p>
          )}
        </div>
        {/* Title */}
        <div id="post-title">
          {post && (
            <h1 className="bg-text w700 sarabun">{post.attributes.title}</h1>
          )}
          <hr className="small-blue-hr" />
        </div>

        {/* Image */}

        {post && props.type === "article" && (
          <div>
            <img
              src={ImageService.getCover(post)}
              alt=""
              className="article-img"
            />
          </div>
        )}

        {post && props.type === "research" && (
          <div>
            <div className="research-img" />
          </div>
        )}

        {/* Strapi */}
        {post && (
          <div
            className="xm2-text"
            dangerouslySetInnerHTML={{ __html: post.attributes.content }}
          />
        )}

        {/* Tag */}
        {/* <div id="post-tag">
          {post &&
            post.attributes.tags.data.map((postTag, index) => (
              <h1
                className="vsm-text w500 small-ls blue-text pointer"
                key={index}
              >
                #{postTag.attributes.tag_name}
              </h1>
            ))}
        </div> */}

        {props.type === "research" && (
          <div>
            <p className="writer sm-text w500 small-ls sarabun">
            {t('PostTemplate.Link')} : <span className="blue-text">{t('PostTemplate.Backto')}</span>
            </p>

            <hr className="post-grey-hr small-grey-hr" />
          </div>
        )}

        {/* {post && post.attributes.writer.data && (
          <p className="writer sm-text w500 small-ls sarabun">
            ผู้เขียน : {post.attributes.writer.data.attributes.firstname} {post.attributes.writer.data.attributes.lastname}
          </p>
        )} */}

        {props.type !== "research" && (
          <hr className="post-grey-hr small-grey-hr" />
        )}

        {/* List */}
        {props.type === "article" && (
          <div id="article-post-list" className="post-list">
            <p className="writer sm-text w700 small-ls sarabun">
              {t('PostTemplate.Article')}
            </p>
            <div>
              <ArticleFlex />
              <ArticleFlex />
              <ArticleFlex />
            </div>
          </div>
        )}

        {props.type === "project" && (
          <div id="project-post-list" className="post-list">
            <p className="writer sm-text w700 small-ls sarabun">
              {t('PostTemplate.Article')}
            </p>
            <div>
              <ArticleLongFlex type={"post"} />
              <ArticleLongFlex type={"post"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
