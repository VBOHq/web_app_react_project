import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Context";

export const store = configureStore({
  reducer: rootReducer,
});
