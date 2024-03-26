import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img className="" alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCart;
