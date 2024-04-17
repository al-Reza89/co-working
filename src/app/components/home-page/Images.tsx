/* eslint-disable @next/next/no-img-element */
import { imageArray } from "@/app/lib/images";
import React from "react";

const Images = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #97BFEE -49.54%, rgba(184, 151, 238, 0) 137.2%)",
      }}
    >
      <div
        className="px-[13px] grid grid-cols-4 gap-[12px]"
        style={{
          position: "relative",
          top: "71px",
        }}
      >
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt="image"
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
