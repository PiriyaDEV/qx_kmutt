import { combineReducers } from "redux";
import articlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
  articles: articlesReducer,
});

export default rootReducer;
