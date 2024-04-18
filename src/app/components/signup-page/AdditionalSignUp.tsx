/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AdditionalSignUp = () => {
  const router = useRouter();

  return (
    <div style={{}}>
      <button
        onClick={() => router.push("/continue-page")}
        style={{
          position: "absolute",
          top: "429px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          left: "27px",
          right: "27px",
          height: "61px",
          width: "340px",
          backgroundColor: "#ffffff",
          border: "1px solid #E0E0E0",
          borderRadius: "50px",
          gap: "10px",
        }}
      >
        <img src="google.svg" alt="google icon" />
        <span
          style={{
            color: "#050926",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "17.64px",
          }}
        >
          Sign up using Google
        </span>
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "560px",
            color: "#515684",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16.56px",
            left: "120px",
          }}
        >
          Already have an account?
        </span>
      </div>
      <button
        style={{
          position: "absolute",
          top: "589px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          left: "27px",
          right: "27px",
          height: "61px",
          width: "340px",
          backgroundColor: "#ffffff",
          border: "1px solid #E0E0E0",
          borderRadius: "50px",
          gap: "10px",
        }}
      >
        <span
          style={{
            color: "#050926",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "17.64px",
          }}
        >
          Sign in
        </span>
      </button>
    </div>
  );
};

export default AdditionalSignUp;
