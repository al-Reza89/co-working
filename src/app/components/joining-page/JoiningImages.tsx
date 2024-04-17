/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import RadioButton from "../worktime-page/RadioButton";

const JoiningImages = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "81px",
          width: "360px",
          height: "510px",
          background: "#FFFFFF",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.19)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            gap: "14px",
          }}
        >
          <h1
            style={{
              color: "##222121",
              fontFamily: "poppins",
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "33px",
            }}
          >
            JOINING...
          </h1>
          <img
            src="joining1.png"
            alt="joining"
            style={{
              width: "90px",
              height: "75px",
              objectFit: "cover",
            }}
          ></img>
          <img
            src="joining2.png"
            alt="joining"
            style={{
              width: "90px",
              height: "75px",
              objectFit: "cover",
            }}
          ></img>
          <img
            src="joining3.png"
            alt="joining"
            style={{
              width: "90px",
              height: "75px",
              objectFit: "cover",
            }}
          ></img>
          <img
            src="joining4.png"
            alt="joining"
            style={{
              width: "90px",
              height: "75px",
              objectFit: "cover",
            }}
          ></img>
        </div>
        <RadioButton />
      </div>
    </div>
  );
};

export default JoiningImages;
