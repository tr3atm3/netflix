import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch my trailer video && updating the store with trailer video
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      api_options
    );
    const json = await data.json();

    const trailer = json.results.filter((video) => video.type === "Trailer")[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
