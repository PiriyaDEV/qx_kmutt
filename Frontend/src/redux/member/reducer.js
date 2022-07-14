import {
  FETCH_MEMBER,
  FETCH_MEMBER_BY_SLUG,
  SET_META_DATA,
  APPEND_TO_MEMBER,
  RANDOM_MEMBER,
} from "./type";

const initialState = {
  members: [],
  member: {},
  random: [],
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
    case FETCH_MEMBER:
      return {
        ...state,
        members: action.payload,
      };
    case FETCH_MEMBER_BY_SLUG:
      return {
        ...state,
        member: action.payload,
      };
    case SET_META_DATA:
      return {
        ...state,
        meta: action.payload,
      };
    case APPEND_TO_MEMBER:
      return {
        ...state,
        members: [...state.members, ...action.payload],
      };
    case RANDOM_MEMBER:
      return {
        ...state,
        random: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
