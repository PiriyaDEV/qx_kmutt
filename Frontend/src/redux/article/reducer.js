import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_BY_SLUG,
  FETCH_RELATED_ARTICLE,
  SET_META_DATA,
  APPEND_TO_ARTICLE,
} from "./type";

const initialState = {
  articles: [],
  article: {},
  relatedArticles: [],
  meta: {
    pagination: {
      isLastPage: false,
      page: 0,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case FETCH_ARTICLES_BY_SLUG:
      return {
        ...state,
        article: action.payload,
      };
    case FETCH_RELATED_ARTICLE:
      return {
        ...state,
        relatedArticles: action.payload,
      };
    case SET_META_DATA:
      return {
        ...state,
        meta: action.payload,
      };
    case APPEND_TO_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
