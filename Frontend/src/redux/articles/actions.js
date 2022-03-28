import { FETCH_ARTICLES , FETCH_ARTICLESBYID } from "./type";

import ArticleService from "../../services/article.js";

export const fetchArticle = () => {
  return (dispatch) => {
    ArticleService.getArticles().then((response) => {
      if (response.length) {
        dispatch(fetchArticleSuccess(response));
      }
    });
  };
};

export const fetchArticleById = (id) => { 
  return (dispatch) => {
      ArticleService.getArticleById(id).then((response) => {
          if (response.length) {
            console.log(response)
              dispatch(fetchArticleByIdSuccess(response));
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

export const fetchArticleByIdSuccess = (articles) => {
  return {
    type: FETCH_ARTICLESBYID,
    payload: articles,
  };
};
