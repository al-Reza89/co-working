/* eslint-disable @next/next/no-img-element */
import React from "react";

const Timer = () => {
  return (
    <div
      style={{
        height: "110px",
        width: "180px",
        backgroundColor: "#F2F2F2",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1
        style={{
          color: "#222121",
          fontSize: "35px",
          paddingTop: "16px",
          fontWeight: "700",
          lineHeight: "33px",
          textAlign: "center",
        }}
      >
        25:00
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            src="Frame.svg"
            alt="Frame"
            style={{
              width: "12px",
              height: "12px",
              objectFit: "cover",
            }}
          ></img>
          <h3
            style={{
              color: "#222121",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "22px",
            }}
          >
            fasdfa
          </h3>
        </div>
        <img
          src="dot.svg"
          alt="dot"
          style={{
            width: "12px",
            height: "12px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        ></img>
      </div>
    </div>
  );
};

export default Timer;
