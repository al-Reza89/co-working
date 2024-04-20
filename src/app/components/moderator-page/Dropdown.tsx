/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface DropDownProps {
  height: string;
  icon: Boolean;
  name1: string;
  minuts?: number[];
  languages?: string[];
}

const DropDown: React.FC<DropDownProps> = ({
  height,
  icon,
  minuts,
  name1,
  languages,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            width: "50%",
          }}
        >
          {name1}
        </div>

        <select
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            width: "50%",
            cursor: "pointer",
            textAlign: "center",
            outline: "none",
          }}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {minuts
            ? minuts.map((minut, index) => (
                <option key={index} style={{}} value={minut}>
                  {minut} Min
                </option>
              ))
            : languages?.map((language, index) => (
                <option key={index} style={{}} value={language}>
                  {language}
                </option>
              ))}
        </select>
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

export default DropDown;
