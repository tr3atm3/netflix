import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return;

  return (
    <div className="bg-black">
      <div className=" pt-32 mt-0 sm:-mt-10 md:-mt-64 pl-6 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
