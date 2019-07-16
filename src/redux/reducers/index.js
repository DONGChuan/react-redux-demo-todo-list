import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import filterReducer from "./visibilityFilter";

// 合并 Reducer
export default combineReducers({
    todoReducer,
    filterReducer
});