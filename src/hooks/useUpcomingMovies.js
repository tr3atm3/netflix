import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { api_options } from "../utils/constants";

const useUpcomingMovies = () => {
  // fetch data from TMDB api and update slice
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      api_options
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;