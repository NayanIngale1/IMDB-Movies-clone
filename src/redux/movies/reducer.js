import {
  GET_ALL_MOVIES,
  REMOVE_SINGLE_MOVIE,
  SET_SINGLE_MOVIE,
    SET_SEARCH_TERM,
  SET_LOADER
} from "./actions";

const init = {
  movies: [],
  single: {},
    searchTerm: "Harry",
  loader:"true"
};
export const moviesReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_MOVIES:
      return { ...state, movies: payload };
    case SET_SINGLE_MOVIE:
      return { ...state, single: payload };
    case REMOVE_SINGLE_MOVIE:
      return { ...state, single: {} };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case SET_LOADER:
      return { ...state, loader: payload };
    default:
      return state;
  }
};
