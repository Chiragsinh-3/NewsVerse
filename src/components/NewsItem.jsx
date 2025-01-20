/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const NewsItem = (props) => {
  const [hasError, setHasError] = useState(false);

  if (!props.image) {
    return null;
  }

  const handleError = (e) => {
    if (!hasError) {
      e.target.src = "src/assets/error.png";
    }
  };

  return (
    <div
      className={
        "z-40 flex h-[300px] w-72 flex-col gap-4 lg:h-full lg:flex-row text-white"
      }
      onClick={() => window.open(props.url, "_blank")}
    >
      <div
        className="cursor-pointer rounded-xl text-wrap whitespace-nowrap shadow-2xl overflow-hidden border border-gray-300"
      >
        <div className="relative w-full h-full">
          <div className="imgDiv h-40 overflow-hidden">
            <img
              src={props.image}
              onError={handleError}
              className="absolute inset-0 z-0 w-full h-full object-cover transition-all hover:scale-125"
            />
          </div>
          <div className="textDiv relative z-10 bg-black/35 backdrop-blur-3xl py-2 px-4">
            <p className="text-sm line-clamp-2">
              <strong className="block"> {props.title}</strong>
            </p>
            <p className="text-xs text-gray-300 mt-1 truncate">
              {props.description?.length > 30 ? `${props.description.substring(0, 150)}...` : props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
