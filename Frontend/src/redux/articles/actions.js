import { FETCH_ARTICLES } from "./type";

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

export const fetchArticleSuccess = (articles) => {
  return {
    type: FETCH_ARTICLES,
    payload: articles,
  };
};
