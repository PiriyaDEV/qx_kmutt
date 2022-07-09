import { FETCH_RESEARCH, FETCH_RESEARCH_BY_SLUG } from "./type";
import ResearchModel from "../../models/research";

const initialState = {
  researches:[],
  research: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESEARCH:
      return {
        ...state,
        researches: action.payload,
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
