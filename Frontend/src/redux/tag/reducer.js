import { FETCH_TAG, FETCH_TAG_BY_ID } from "./type";

const initialState = {
  tags: [],
  tag: {
    attributes: {
      tag_name: "",
    },
    id: 0,
  },
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
