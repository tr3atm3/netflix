import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GotMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  return (
    <div classsName="p-4 m-4 bg-black bg-opacity-70 text-white">
      <div>
        {movieNames.map((movie, i) => (
          <MovieList key={movie} title={movie} movies={movieResults[i]} />
        ))}
      </div>
    </div>
  );
};

export default GotMovieSuggestion;
