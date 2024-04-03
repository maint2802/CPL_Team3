import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { useReducer } from "react";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// state slice
