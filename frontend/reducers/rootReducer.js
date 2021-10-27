import entitiesReducer from "./entitiesReducer";
import uiReducer from "./uiReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer
});

export default rootReducer;