/* eslint-disable @next/next/no-img-element */
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        style={{
          position: "absolute",
          top: "57px",
          left: "20px",
          height: "86px",
          width: "86px",
          borderRadius: "112.5px",
        }}
        src="logo1.png"
        alt="logo"
        className="object-cover"
      ></img>
      <h1
        style={{
          position: "absolute",
          top: "162px",
          color: "#212121",
          fontFamily: "roboto",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "18.75px",
        }}
      >
        code five
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "191px",
          left: "30px",
          color: "#9A9A9A",
          fontFamily: "roboto",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "16.41px",
        }}
      >
        Agência
      </h1>
      <span
        style={{
          position: "absolute",
          top: "211px",
          left: "30px",
          color: "#212121",
          fontFamily: "roboto",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "16.41px",
        }}
      >
        O seu site de sonhos, está no sitio certo. 💻
      </span>
      <h1
        style={{
          position: "absolute",
          top: "227px",
          left: "30px",
          color: "#1B538C",
          fontFamily: "roboto",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "16.41px",
        }}
      >
        codefive.pt
      </h1>
    </div>
  );
};

export default Logo;
