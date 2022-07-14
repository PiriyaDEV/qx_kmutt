import {
  FETCH_ACTIVITY,
  FETCH_ACTIVITY_BY_SLUG,
  SET_META_DATA,
  APPEND_TO_ACTIVITY,
} from "./type";

const initialState = {
  activities: [],
  activity: {},
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
    case FETCH_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case FETCH_ACTIVITY_BY_SLUG:
      return {
        ...state,
        activity: action.payload,
      };
    case SET_META_DATA:
      return {
        ...state,
        meta: action.payload,
      };
    case APPEND_TO_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
