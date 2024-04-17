/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import RadioButton from "./RadioButton";

const WorktimeContent = () => {
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
          width: "350px",
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
          <h3
            style={{
              color: "##222121",
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            The Session is about to start.
          </h3>
          <div
            style={{
              position: "absolute",
              top: "200px",
              height: "46px",
              width: "320px",
              backgroundColor: "rgba(14, 113, 235, 0.1)",
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "400",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
                textAlign: "center",
                lineHeight: "21px",
                color: "#010B17",
                paddingLeft: "10px",
              }}
            >
              We are looking for people to join...
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "260px",
              height: "46px",
              width: "320px",
              backgroundColor: "rgba(14, 113, 235, 0.1)",
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "400",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "center",
                lineHeight: "21px",
                color: "#010B17",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h3>You can add people with this link: </h3>
                <h3> Shortlink.XYZ</h3>
              </span>
              <img
                src="Vector.svg"
                alt="Vector"
                style={{
                  height: "22px",
                  width: "21.38px",
                }}
                className="object-cover"
              ></img>
            </div>
          </div>
        </div>
        <RadioButton />
      </div>
    </div>
  );
};

export default WorktimeContent;
