import { combineReducers } from "redux";
import articlesReducer from "./articles/reducer";
import projectReducer from "./project/reducer";
import memberReducer from "./member/reducer";
import researchReducer from "./research/reducer";
import tagReducer from "./tag/reducer"

const rootReducer = combineReducers({
  articles: articlesReducer,
  projects: projectReducer,
  members: memberReducer,
  researchs: researchReducer,
  tags: tagReducer
});

export default rootReducer;
