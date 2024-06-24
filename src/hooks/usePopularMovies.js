import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";
import { api_options } from "../utils/constants";

const usePopularMovies = () => {
  // fetch data from TMDB api and update slice
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      api_options
    );
    const json = await data.json();

    dispatch(addPopularMovies(json?.results));
  }, [dispatch]);
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [popularMovies, getPopularMovies]);
};

export default usePopularMovies;
