import { FETCH_ARTICLES , FETCH_ARTICLESBYID } from "./type";

const initialState = {
  articles: [],
  articlesById: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case FETCH_ARTICLESBYID: 
      return {
        ...state,
        articlesById: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
