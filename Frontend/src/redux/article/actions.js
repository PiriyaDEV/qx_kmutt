import { FETCH_ARTICLES , FETCH_ARTICLES_BY_SLUG } from "./type";

import ArticleService from "../../services/article.js";

export const fetchArticle = (pageSize = 25) => {
  return (dispatch) => {
    ArticleService.getArticles(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchArticleSuccess(response));
      }
    });
  };
};

export const fetchArticleBySlug = (slug) => { 
  return (dispatch) => {
      ArticleService.getArticleBySlug(slug).then((response) => {
          if (response.length) {
              dispatch(fetchArticleBySlugSuccess(response[0]));
            }
        });
  };
};

export const fetchArticleSuccess = (articles) => {
  return {
    type: FETCH_ARTICLES,
    payload: articles,
  };
};

export const fetchArticleBySlugSuccess = (article) => {
  return {
    type: FETCH_ARTICLES_BY_SLUG,
    payload: article,
  };
};
