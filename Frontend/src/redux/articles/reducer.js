import { FETCH_ARTICLES , FETCH_ARTICLES_BY_SLUG } from "./type";

const initialState = {
  articles: [],
  article: {
    attributes: {
      slug: "",
      title: "",
      content: "",
      published_date: "",
      cover: {
        data: {
          attributes: {
            url: ""
          }
        }
      }
    },
    id: 0
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
    default:
      return state;
  }
};

export default reducer;
