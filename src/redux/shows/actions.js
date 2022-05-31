//action type
export const GET_ALL_SHOWS = "GET_ALL_SHOWS";

//action creator

export const setAllShows = (data) => {
  return {
    type: GET_ALL_SHOWS,
    payload: data,
  };
};
