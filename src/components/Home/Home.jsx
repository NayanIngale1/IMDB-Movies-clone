import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { APIKey } from "../../common/apis/movieApiKey";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAllMovies, setLoader } from "../../redux/movies/actions";
import { setAllShows } from "../../redux/shows/actions";

const Home = () => {
  const dispatch = useDispatch();
  const term = useSelector((state) => state.moviesReducer.searchTerm);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${term}&type=movie`)
      .then((res) => {
        // console.log("res:", res);
        const movies = res.data;
        dispatch(setAllMovies(movies));
      })
      .catch((err) => console.log("Err : ", err));

    axios
      .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${term}&type=series`)
      .then((res) => {
        console.log("res:", res);
        const shows = res.data;
        dispatch(setAllShows(shows));
      })
      .catch((err) => console.log("Err : ", err));

    setTimeout(() => {
      dispatch(setLoader(false));
    }, 1000);
  }, [term]);

  return (
    <div className="home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
