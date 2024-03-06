import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";

// store
const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});
export default store;
