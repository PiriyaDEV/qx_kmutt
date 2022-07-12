import { FETCH_CATEGORY, FETCH_CATEGORY_BY_ID } from "./type";

const initialState = {
  categories: [],
  category: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case FETCH_CATEGORY_BY_ID:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
