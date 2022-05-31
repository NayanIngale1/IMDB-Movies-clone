import { GET_ALL_SHOWS } from "./actions";

const init = {
  shows: [],
};
export const showsReducer = (state= init, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_SHOWS:
      return { ...state, shows: payload };
    default:
      return state;
  }
};
