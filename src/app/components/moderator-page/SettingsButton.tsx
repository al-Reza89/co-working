/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface ButtonProps {
  name1: string;
  name2: string;
  height: string;
  icon: Boolean;
}

const SettingsButton: React.FC<ButtonProps> = ({
  name1,
  name2,
  height,
  icon,
}) => {
  const [activeButton, setActiveButton] = useState("One");

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: height,
        left: "65px",
      }}
    >
      <div
        style={{
          height: "46px",
          width: "260px",
          backgroundColor: "rgba(14, 113, 235, 0.1)",
          borderRadius: "10px",
          display: "flex",
          padding: "3px",
          gap: "5px",
        }}
      >
        <button
          style={{
            backgroundColor: activeButton === "One" ? "#ffffff" : "",
            borderRadius: activeButton === "One" ? "10px" : "",
            width: "50%",
          }}
          onClick={() => handleButtonClick("One")}
        >
          {name1}
        </button>
        <button
          style={{
            backgroundColor: activeButton === "Two" ? "#ffffff" : "",
            borderRadius: activeButton === "Two" ? "10px" : "",
            width: "50%",
          }}
          onClick={() => handleButtonClick("Two")}
        >
          {name2}
        </button>
      </div>
      {icon && (
        <img
          src="Information.png"
          alt="settings icon"
          style={{ height: "8px", width: "12px", paddingLeft: "5px" }}
          className="object-cover"
        />
      )}
    </div>
  );
};

export default SettingsButton;
