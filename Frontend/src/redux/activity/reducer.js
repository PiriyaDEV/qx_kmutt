import { FETCH_ACTIVITY, FETCH_ACTIVITY_BY_SLUG } from "./type";
import ActivityModel from "../../models/activity";

const initialState = {
  activities: [],
  activity: ActivityModel.getOne({}),
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
    default:
      return state;
  }
};

export default reducer;
