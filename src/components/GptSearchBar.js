import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[12%] flex justify-center ">
      <form className=" w-1/2 grid grid-cols-12 bg-black bg-opacity-60 rounded-lg">
        <input
          type="text"
          className="p-4 col-span-8 rounded-lg m-4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-4 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
