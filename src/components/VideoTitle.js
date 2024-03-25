import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute top-0 left-0  text-white bg-gradient-to-r from-black  pt-52 px-12 ">
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <p className="text-l w-1/3">{overview}</p>
      <div className="my-4 flex">
        <button className="mr-4 bg-white rounded-lgpy-3 px-12 text-xl font-bold text-black align-middle hover:bg-opacity-70">
          <FaPlay className="inline mb-1 mr-2" />
          Play
        </button>
        <button className=" border border-gray-600 mr-4 bg-opacity-70 rounded-lg text-white py-3 px-8 text-l align-middle">
          {" "}
          <span className="border border-gray-600 rounded-[50%] px-2 text-white">
            !
          </span>{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
