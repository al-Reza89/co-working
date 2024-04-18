"use client";
import { useRouter } from "next/navigation";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const CommentBox = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "5px",
      }}
    >
      <h1
        style={{
          color: "#222121",
          fontFamily: "poppins",
          fontSize: "22px",
          fontWeight: "500",
          lineHeight: "33px",
        }}
      >
        Feedback:
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src="Stars.svg"
          alt="Stars"
          style={{
            objectFit: "cover",
            width: "48px",
            height: "48px",
          }}
        ></img>
        <img
          src="Stars.svg"
          alt="Stars"
          style={{
            objectFit: "cover",
            width: "48px",
            height: "48px",
          }}
        ></img>
        <img
          src="Stars.svg"
          alt="Stars"
          style={{
            objectFit: "cover",
            width: "48px",
            height: "48px",
          }}
        ></img>
        <img
          src="Stars.svg"
          alt="Stars"
          style={{
            objectFit: "cover",
            width: "48px",
            height: "48px",
          }}
        ></img>
      </div>
      <div>
        <h1>Comment</h1>
        <textarea
          style={{
            width: "100%",
            height: "80px",
            padding: "10px",
            borderRadius: "10px",
            // border: "1px solid #DFDEDE",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.19)",
            resize: "none",
            backgroundColor: "#ffffff",
          }}
        ></textarea>
        <p
          style={{
            textAlign: "end",
            cursor: "pointer",
          }}
        >
          Send
        </p>
      </div>
      <p
        onClick={() => router.push("/")}
        style={{
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Back to Home
      </p>
    </div>
  );
};

export default CommentBox;
