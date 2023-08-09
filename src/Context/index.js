import { combineReducers } from "redux";
import sampleReducer from "./Reducer/sampleReducer";
import joySlice from "./Reducer/joyReducer";
import sampleViewReducers from "./Reducer/sampleViewReducers";

export const rootReducer = combineReducers({
  sampleReducer,
  joySlice,
  sampleViewReducers,
});
