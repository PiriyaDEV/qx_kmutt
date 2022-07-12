import { FETCH_ARTICLES, FETCH_ARTICLES_BY_SLUG } from "./type";

import ArticleService from "../../services/article";
import ArticleModel from "../../models/article";

export const fetchArticle = (pageSize = 25) => {
  return (dispatch) => {
    ArticleService.getArticles(pageSize).then(async (response) => {
      if (response.data.length) {
        const data = await Promise.all(
          response.data.map((article) => ArticleModel.getMany(article))
        );
        dispatch(fetchArticleSuccess(data));
      }
    });
  };
};

export const fetchArticleBySlug = (slug) => {
  return (dispatch) => {
    ArticleService.getArticleBySlug(slug).then(async (response) => {
      if (response) {
        const data = await ArticleModel.getOne(response);
        dispatch(fetchArticleBySlugSuccess(data));
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
