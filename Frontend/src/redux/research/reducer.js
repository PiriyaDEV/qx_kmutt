import {
  FETCH_RESEARCH,
  FETCH_RESEARCH_BY_SLUG,
  FETCH_RELATED_RESEARCH,
  SET_META_DATA,
  APPEND_TO_RESEARCH,
} from "./type";

const initialState = {
  researches: [],
  research: {},
  relatedResearches: [],
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
    case FETCH_RELATED_RESEARCH:
      return {
        ...state,
        relatedResearches: action.payload,
      };
    case SET_META_DATA:
      return {
        ...state,
        meta: action.payload,
      };
    case APPEND_TO_RESEARCH:
      return {
        ...state,
        researches: [...state.researches, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
