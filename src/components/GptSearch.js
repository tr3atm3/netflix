import React from "react";
import GptSearchBar from "./GptSearchBar";
import GotMovieSuggestion from "./GotMovieSuggestion";
import { Background_img } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="w-full h-[100vh] -z-10 fixed">
        <img
          className="w-full h-[100vh] object-cover"
          src={Background_img}
          alt="background of different movie"
        />
      </div>
      <GptSearchBar />
      <GotMovieSuggestion />
    </div>
  );
};

export default GptSearch;
