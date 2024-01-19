import { combineReducers } from "redux";
import CommonReducer from "./common";
import themeReducer from "./theme";

const RootReducer = combineReducers({
  common: CommonReducer,
  theme: themeReducer
});

export default RootReducer;
