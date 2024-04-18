/* eslint-disable @next/next/no-img-element */
import React from "react";
import MasonryGrid from "./MasonryGrid";
import Timer from "./Timer";
import RadioButton from "../worktime-page/RadioButton";

const MeetingImages = () => {
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
          height: "560px",
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
          <div>
            <MasonryGrid />
          </div>
          <Timer />
          <RadioButton top="510px" routePage={true} />
        </div>
      </div>
    </div>
  );
};

export default MeetingImages;
