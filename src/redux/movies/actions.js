//action type
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const SET_SINGLE_MOVIE = "SET_SINGLE_MOVIE";
export const REMOVE_SINGLE_MOVIE = "REMOVE_SINGLE_MOVIE";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const SET_LOADER = "SET_LOADER";

//action creator

export const setAllMovies = (data) => {
  return {
    type: GET_ALL_MOVIES,
    payload: data,
  };
};
export const setSingleMovie = (data) => {
  return {
    type: SET_SINGLE_MOVIE,
    payload: data,
  };
};
export const removeSingleMovie = () => {
  return {
    type: REMOVE_SINGLE_MOVIE,
  };
};
export const setSearchTerm = (term) => {
  return {
    type: SET_SEARCH_TERM,
    payload: term,
  };
};
export const setLoader = (value) => {
  return {
    type: SET_LOADER,
    payload: value,
  };
};
