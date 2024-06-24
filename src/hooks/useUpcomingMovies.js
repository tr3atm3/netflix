import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";
import { api_options } from "../utils/constants";

const useUpcomingMovies = () => {
  // fetch data from TMDB api and update slice
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      api_options
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json?.results));
  }, [dispatch]);
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, [upcomingMovies, getUpcomingMovies]);
};

export default useUpcomingMovies;
