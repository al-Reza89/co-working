"use client";
import { useRouter } from "next/navigation";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const StartSession = () => {
  const router = useRouter();
  return (
    <div
      style={{
        position: "absolute",
        top: "320px",
        left: "35px",
        width: "323px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(14, 113, 235, 0.1)",
        fontFamily: "roboto",
        fontSize: "14px",
        fontWeight: "600",
      }}
    >
      <div
        style={{
          height: "140px",
          width: "303px",
          left: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          right: "10px",
          borderRadius: "19px",
          backgroundColor: "#ffffff",
          border: "1px solid #CECECE",
        }}
      >
        <div
          style={{
            color: "rgba(0, 0, 0, 1)",
            padding: "10px",
            fontFamily: "Poppins",
            fontSize: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div>
            <h1 style={{}}>Previous</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "normal",
              gap: "20px",
            }}
          >
            <h1>40 Minutes</h1>
            <img
              style={{
                position: "relative",
                height: "32px",
                width: "32px",
                borderRadius: "24px",
                border: "2px solid #ffffff",
              }}
              className="object-cover"
              src="Avatar1.png"
              alt="person"
            ></img>
            <img
              style={{
                position: "relative",
                left: "-30px",
                zIndex: 5,
                height: "32px",
                width: "32px",
                borderRadius: "24px",
                border: "2px solid #ffffff",
              }}
              className="object-cover"
              src="Avatar2.png"
              alt="person"
            ></img>
            <div
              style={{
                position: "relative",
                left: "-60px",
                zIndex: 5,
                height: "32px",
                width: "32px",
                borderRadius: "24px",
                border: "2px solid #ffffff",
                background: "rgba(96, 108, 128, 0.5)",
                color: "#606C80",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +5
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "normal",
              gap: "20px",
            }}
          >
            <h1>15 Minutes</h1>
            <img
              style={{
                position: "relative",
                height: "32px",
                width: "32px",
                borderRadius: "24px",
                border: "2px solid #ffffff",
              }}
              className="object-cover"
              src="Avatar1.png"
              alt="person"
            ></img>
            <img
              style={{
                position: "relative",
                left: "-30px",
                zIndex: 5,
                height: "32px",
                width: "32px",
                borderRadius: "24px",
                border: "2px solid #ffffff",
              }}
              className="object-cover"
              src="Avatar2.png"
              alt="person"
            ></img>
            <div
              style={{
                position: "relative",
                left: "-60px",
                zIndex: 5,
                height: "32px",
                width: "32px",
                borderRadius: "24px",
                border: "2px solid #ffffff",
                background: "rgba(96, 108, 128, 0.5)",
                color: "#606C80",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +5
            </div>
          </div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            More
          </span>
        </div>
      </div>
      <button
        onClick={() => router.push("/moderator-page")}
        style={{
          height: "70px",
          width: "303px",
          left: "10px",
          marginBottom: "10px",
          right: "10px",
          borderRadius: "19px",
          backgroundColor: "#ffffff",
          border: "1px solid #CECECE",
          color: "#000000",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "400",
        }}
      >
        Start a session
      </button>
      <button
        style={{
          height: "70px",
          width: "303px",
          left: "10px",
          marginBottom: "10px",
          right: "10px",
          borderRadius: "19px",
          backgroundColor: "#BEBEBE",
          border: "1px solid #CECECE",
          color: "white",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "400",
        }}
      >
        Participate in a session
      </button>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#515684",
          fontFamily: "sora",
          lineHeight: "16.56px",
          fontSize: "10px",
          paddingBottom: "10px",
        }}
      >
        All free session is used. Please upgrade
      </span>
    </div>
  );
};

export default StartSession;
