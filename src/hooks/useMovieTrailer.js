import { useDispatch, useSelector } from "react-redux";
import { api_options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // fetch my trailer video && updating the store with trailer video
  const getMovieTrailer = useCallback(async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      api_options
    );
    const json = await data.json();

    const trailer = json.results.filter((video) => video.type === "Trailer")[0];

    dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieId]);

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, [getMovieTrailer, trailerVideo]);
};

export default useMovieTrailer;
