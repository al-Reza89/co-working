/* eslint-disable @next/next/no-img-element */
import React from "react";

const ActiveMember = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "252px",
        left: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5px",
        fontFamily: "roboto",
        fontSize: "14px",
        fontWeight: "600",
        color: "#212121",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            position: "relative",
            height: "28px",
            width: "23px",
            borderRadius: "50px",
          }}
          className="object-cover"
          src="person1.png"
          alt="person"
        ></img>
        <img
          style={{
            position: "relative",
            left: "-10px",
            zIndex: 5,
            height: "28px",
            width: "23px",
            borderRadius: "50px",
          }}
          className="object-cover"
          src="person2.png"
          alt="person"
        ></img>
        <img
          style={{
            position: "relative",
            left: "-20px",
            zIndex: 3,
            height: "28px",
            width: "23px",
            borderRadius: "50px",
          }}
          className="object-cover"
          src="person3.png"
          alt="person"
        ></img>
      </div>
      <div
        style={{
          position: "relative",
          left: "-15px",
        }}
      >
        <span>Seguido por joaocorreia09, vanda.carvalho e</span>
        <h1>16 outros amigos</h1>
      </div>
    </div>
  );
};

export default ActiveMember;
