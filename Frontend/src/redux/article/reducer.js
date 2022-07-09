import { FETCH_ARTICLES , FETCH_ARTICLES_BY_SLUG } from "./type";
import ArticleModel from "../../models/article";

const initialState = {
  articles: [],
  article: {},
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
    default:
      return state;
  }
};

export default reducer;
