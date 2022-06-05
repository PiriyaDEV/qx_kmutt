import { FETCH_RESEARCH, FETCH_RESEARCH_BY_SLUG } from "./type";

const initialState = {
  researchs:[],
  research: {
    attributes: {
      slug: "",
      title: "",
      content: "",
      research_database_url:"",
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
    case FETCH_RESEARCH:
      return {
        ...state,
        researchs: action.payload,
      };
      case FETCH_RESEARCH_BY_SLUG:
        return {
          ...state,
          research: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
