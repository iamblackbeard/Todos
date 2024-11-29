import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import localStorageMiddleware from "../middleware/localStorageMiddleware";
import loadStateFromLocalStorage from "../utils/loadState";

const store = configureStore({
  preloadedState: loadStateFromLocalStorage() || {todos:[]},
  reducer: todoReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
