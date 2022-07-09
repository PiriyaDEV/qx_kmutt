import { FETCH_INTEREST, FETCH_INTEREST_BY_ID } from "./type";
import InterestModel from "../../models/interest";

const initialState = {
  interests: [],
  interest: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INTEREST:
      return {
        ...state,
        interests: action.payload,
      };
    case FETCH_INTEREST_BY_ID:
      return {
        ...state,
        interest: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
