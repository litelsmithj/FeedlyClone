import feedsReducer from "./feedsReducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
    feeds: feedsReducer
});

export default entitiesReducer;
