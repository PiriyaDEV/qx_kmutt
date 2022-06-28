import { combineReducers } from "redux";
import articleReducer from "./article/reducer";
import activityReducer from "./activity/reducer";
import memberReducer from "./member/reducer";
import researchReducer from "./research/reducer";
import tagReducer from "./tag/reducer";
import categoryReducer from "./category/reducer";
import interestReducer from "./interest/reducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  activities: activityReducer,
  members: memberReducer,
  researches: researchReducer,
  tags: tagReducer,
  categories: categoryReducer,
  interests: interestReducer,
});

export default rootReducer;
