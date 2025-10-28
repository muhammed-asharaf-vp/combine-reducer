
import { createStore, combineReducers } from "redux";
import counterReducer from "./counterReducer.js";
import userReducer from "./userReducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
