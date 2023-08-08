import { combineReducers } from "redux";
import sampleReducer from "./Reducer/sampleReducer";
import joySlice from "./Reducer/joyReducer";

export const rootReducer = combineReducers({
  sampleReducer,
  joySlice,
});
