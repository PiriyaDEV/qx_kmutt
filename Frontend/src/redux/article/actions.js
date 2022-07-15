import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_BY_SLUG,
  FETCH_RELATED_ARTICLE,
  SET_META_DATA,
  APPEND_TO_ARTICLE,
} from "./type";

import ArticleService from "../../services/article";
import ArticleModel from "../../models/article";
import RelatedContent from "../../utilities/relatedContent";

export const fetchArticle = (pageSize = 25, tagsFilter = [], page = 1) => {
  return (dispatch) => {
    ArticleService.getArticles(pageSize, tagsFilter, page).then(
      async (response) => {
        const data = await Promise.all(
          response.data.map((article) => ArticleModel.getMany(article))
        );
        dispatch(fetchArticleSuccess(data));
        dispatch(setMetadata(response.meta));
      }
    );
  };
};

export const fetchArticleByPage = (pageSize = 25, tagsFilter = []) => {
  return (dispatch, getState) => {
    const { meta } = getState().articles;
    if (meta.pagination.page < meta.pagination.pageCount) {
      ArticleService.getArticles(
        pageSize,
        tagsFilter,
        meta.pagination.page + 1
      ).then(async (response) => {
        if (response.data.length) {
          const data = await Promise.all(
            response.data.map((article) => ArticleModel.getMany(article))
          );
          dispatch(appendToArticle(data));
          dispatch(setMetadata(response.meta));
        }
      });
    }
  };
};

export const fetchRelatedArticles = () => {
  return (dispatch, getState) => {
    const { article: current } = getState().articles;
    ArticleService.getArticles(50, [], 1).then(async (response) => {
      if (response.data.length) {
        const data = await Promise.all(
          response.data.map((article) => ArticleModel.getMany(article))
        );
        const filteredData = data.filter((article) => article.id != current.id);
        const dataWithScore = await RelatedContent.calculateScore(
          current,
          filteredData
        );
        const dataSortedWithScore = await RelatedContent.sortContentByScore(
          dataWithScore
        );
        dispatch(fetchRelatedArticleSuccess(dataSortedWithScore));
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
        dispatch(fetchRelatedArticles());
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

export const fetchRelatedArticleSuccess = (articles) => {
  return {
    type: FETCH_RELATED_ARTICLE,
    payload: articles,
  };
};

export const setMetadata = (meta) => {
  meta.pagination.isLastPage =
    meta.pagination.page == meta.pagination.pageCount;
  return {
    type: SET_META_DATA,
    payload: meta,
  };
};

export const appendToArticle = (articles) => {
  return {
    type: APPEND_TO_ARTICLE,
    payload: articles,
  };
};
