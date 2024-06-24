import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";
import { api_options } from "../utils/constants";

const useNowPlayingMovies = () => {
  // fetch data from TMDB api and update slice
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      api_options
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json?.results));
  }, [dispatch]);
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, [getNowPlayingMovies, nowPlayingMovies]);
};

export default useNowPlayingMovies;
