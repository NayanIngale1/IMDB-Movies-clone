// import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./movies/reducer";
import { showsReducer } from "./shows/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  moviesReducer,
  showsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
