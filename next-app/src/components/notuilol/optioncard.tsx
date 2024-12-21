import React from "react";

export default function (catData) {
  const imageUrl = catData.catData.url;

  return (
    <>
      <div>
        <div className="size-full flex items-center justify-center">
          <img
            className=" justify-center m-10 size-2/6"
            src={imageUrl}
            alt="cat image"
          />
        </div>
        <div className="size-full flex items-center justify-center">
          <div className="mx-10">this will be an option</div>
          <div className="mx-10">this will be an option</div>
          <div className="mx-10">this will be an option</div>
          <div className="mx-10">this will be an option</div>
        </div>
      </div>
    </>
  );
}
