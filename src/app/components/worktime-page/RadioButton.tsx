/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState("focus");

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
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
          justifyContent: "center",
          gap: "60px",
        }}
      >
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
            padding: "10px",
            border: "none",
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
            padding: "10px",
            border: "none",
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
