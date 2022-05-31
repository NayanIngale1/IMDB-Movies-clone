import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { Settings } from "../../common/settings";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.moviesReducer.movies);
  const shows = useSelector((state) => state.showsReducer.shows);
  const loading = useSelector((state) => state.moviesReducer.loader);

  // console.log("movies:", movies);

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, idx) => <MovieCard key={idx} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3 className="listing_error">{movies.Error}</h3>
      </div>
    );
  let renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, idx) => <MovieCard key={idx} data={show} />)
    ) : (
      <div className="shows-error">
        <h3 className="listing_error">{shows.Error}</h3>
      </div>
    );

  const Loading = () => (
    <div className="loading">
      <span class="fas fa-spinner fa-3x fa-spin"></span>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div className="movie-container">
            <Slider {...Settings}>{renderMovies}</Slider>
          </div>
        )}
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div className="shows-container">
            {" "}
            <Slider {...Settings}>{renderShows}</Slider>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default MovieListing;
