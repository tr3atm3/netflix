import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { api_options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const [errMessage, setErrMessage] = useState(null);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/" +
        movie +
        "?include_adult=false&language=en-US&page=1",
      api_options
    );
    const json = data.json();
    return json.results;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // making an api call to gpt ai and get movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names for 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi mil gya.";
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promiseData = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseData);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (err) {
      setErrMessage(err.message);
    }
  };
  return (
    <div className="pt-[50%] md:pt-[12%] flex justify-center flex-col items-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 bg-black bg-opacity-60 rounded-lg"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="p-4 col-span-8 rounded-lg m-4"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-4 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
      {errMessage && (
        <p className="text-white text-xl md:w-[60%] w-full p-4 md:p-8 mt-8 bg-black bg-opacity-60 rounded-lg">
          {errMessage}
        </p>
      )}
    </div>
  );
};

export default GptSearchBar;
