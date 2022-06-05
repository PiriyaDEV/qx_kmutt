import { FETCH_PROJECT, FETCH_PROJECT_BY_SLUG } from "./type";

const initialState = {
  projects:[],
  project: {
    attributes: {
      slug: "",
      title: "",
      content: "",
      category: "",
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
    case FETCH_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
      case FETCH_PROJECT_BY_SLUG:
        return {
          ...state,
          project: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
