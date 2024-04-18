"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const images = [
  { url: "meeting3.png", name: "Joy" },
  { url: "meeting1.png", name: "James" },
  { url: "meeting2.png", name: "Karen A" },
  { url: "meeting4.png", name: "Image 4" },
  { url: "meeting4.png", name: "Image 3" },
  { name: "Image 3" },
];

const MasonryGrid = ({}) => {
  const [startIndex, setStartIndex] = useState(1);
  const endIndex = Math.min(startIndex + 2, images.length - 1);

  const handlePrev = () => {
    if (startIndex > 1) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < images.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  const renderProfile = (name: any) => {
    const initials = name
      .split(" ")
      .map((word: any) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div
        style={{
          width: "95px",
          height: "85px",
          borderRadius: "10px",
          backgroundColor: "#0B0E15",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#7E47EB",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "24px",
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {initials}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handlePrev} disabled={startIndex === 1}>
          &lt;
        </button>
        <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}>
          {images.slice(startIndex, endIndex + 1).map((image, index) => (
            <div key={index} style={{ margin: "0 5px", textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                {image.url ? (
                  <img
                    src={image.url}
                    alt={image.name}
                    style={{
                      width: "110px",
                      height: "85px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  renderProfile(image.name)
                )}
                <p
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    left: "5px",
                    margin: 0,
                    padding: "3px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    fontSize: "12px",
                    borderRadius: "4px 4px 4px 4px",
                  }}
                >
                  {image.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={endIndex === images.length - 1}>
          &gt;
        </button>
      </div>
      <div
        style={{
          display: "flex",
          paddingLeft: "10px",
          paddingRight: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src="meeting3.png"
            alt="meeting"
            style={{
              width: "180px",
              height: "160px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          ></img>
          <p
            style={{
              position: "absolute",
              bottom: "5px",
              left: "5px",
              margin: 0,
              padding: "3px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontSize: "12px",
              borderRadius: "4px 4px 4px 4px",
            }}
          >
            Joy
          </p>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src="meeting4.png"
            alt="meeting"
            style={{
              width: "150px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          ></img>
          <p
            style={{
              position: "absolute",
              bottom: "5px",
              left: "5px",
              margin: 0,
              padding: "3px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontSize: "12px",
              borderRadius: "4px 4px 4px 4px",
            }}
          >
            Rita B (You)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
