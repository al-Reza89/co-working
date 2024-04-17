import React from "react";

const ModeratorDescription = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "95px",
          color: "#222121",
          display: "flex",
          fontSize: "22px",
          fontWeight: "500",
          lineHeight: "33px",
        }}
      >
        Welcome! You are the Moderator!
      </h1>
    </div>
  );
};

export default ModeratorDescription;
