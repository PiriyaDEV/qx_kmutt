import { FETCH_TAG, FETCH_TAG_BY_ID } from "./type";
import TagModel from "../../models/tag";

const initialState = {
  tags: [],
  tag: TagModel.getOne({}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAG:
      return {
        ...state,
        tags: action.payload,
      };
    case FETCH_TAG_BY_ID:
      return {
        ...state,
        tag: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
