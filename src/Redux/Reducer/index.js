import { combineReducers } from "redux";
import { burgerReducer } from "./BurgerReducer";

export const rootReducer = combineReducers({
  burgerReducer,
});
