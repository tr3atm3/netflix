import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { api_options } from "../utils/constants";

const useNowPlayingMovies = () => {
  // fetch data from TMDB api and update slice
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      api_options
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
