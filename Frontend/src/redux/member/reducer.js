import { FETCH_MEMBER, FETCH_MEMBER_BY_SLUG } from "./type";
import MemberModel from "../../models/member";

const initialState = {
  members: [],
  member: {},
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
    default:
      return state;
  }
};

export default reducer;
