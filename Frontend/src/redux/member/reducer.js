import { FETCH_MEMBER, FETCH_MEMBER_BY_SLUG, RANDOM_MEMBER } from "./type";
import MemberModel from "../../models/member";

const initialState = {
  members: [],
  member: {},
  random: [],
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
