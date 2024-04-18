/* eslint-disable @next/next/no-img-element */
import React from "react";
import CommentBox from "./CommentBox";

const FeedbackLogo = () => {
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
            Worktime
          </h1>
          <img
            src="DoneOutline.svg"
            alt="Done"
            style={{
              width: "188px",
              height: "191px",
              objectFit: "cover",
            }}
          ></img>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "360px",
          width: "360px",
          height: "280px",
          background: "#DFDEDE",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.19)",
          borderRadius: "2px 2px 2px 2px",
        }}
      >
        <CommentBox />
      </div>
    </div>
  );
};

export default FeedbackLogo;
