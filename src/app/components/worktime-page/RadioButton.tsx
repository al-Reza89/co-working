"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ButtonProps {
  routePage?: boolean;
}

const RadioButton: React.FC<ButtonProps> = ({ routePage }) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("focus");

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
    if (option === "focus" && routePage) {
      router.push("/meeting-page");
    } else if (option === "break" && routePage) {
      router.push("/feedback-page");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "440px",
          display: "flex",
          flexDirection: "row",
          gap: "60px",
        }}
      >
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
            paddingLeft: "4px",
            paddingRight: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            border: "1px solid rgba(14, 113, 235, 0.1)",
            borderRadius: "10px",
          }}
          onClick={() => handleOptionChange("focus")}
        >
          <img
            src="Ellipse.svg"
            alt="Ellipse"
            width="17"
            height="17"
            style={{
              backgroundColor: selectedOption === "focus" ? "blue" : "",
              color: selectedOption === "focus" ? "white" : "black",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          ></img>
          Focus
        </button>
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
            paddingLeft: "4px",
            paddingRight: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            border: "1px solid rgba(14, 113, 235, 0.1)",
            borderRadius: "10px",
          }}
          onClick={() => handleOptionChange("break")}
        >
          <img
            src="Ellipse.svg"
            alt="Ellipse"
            width="17"
            height="17"
            style={{
              backgroundColor: selectedOption === "break" ? "blue" : "",
              color: selectedOption === "break" ? "white" : "black",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          ></img>
          Break
        </button>
      </div>
    </div>
  );
};

export default RadioButton;
