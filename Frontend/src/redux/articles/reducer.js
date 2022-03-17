import { FETCH_ARTICLES } from "./type";

const initialState = {
  articles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
