import React from "react";

const NavBar = () => {
  return (
    <div
      className=""
      style={{
        position: "absolute",
        top: "673px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "42px",
        left: "27px",
        right: "27px",
      }}
    >
      <h3
        style={{
          fontFamily: "Sora",
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "13.8px",
          color: "#515684",
        }}
      >
        Terms of Service
      </h3>
      <h3
        style={{
          fontFamily: "Sora",
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "13.8px",
          color: "#515684",
        }}
      >
        Privacy Policy
      </h3>
      <h3
        style={{
          fontFamily: "Sora",
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "13.8px",
          color: "#515684",
        }}
      >
        Imprint
      </h3>
    </div>
  );
};

export default NavBar;
