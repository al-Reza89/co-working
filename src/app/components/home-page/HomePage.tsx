import React from "react";
import Images from "./Images";
import HomeText from "./HomeText";
import Button from "./Button";
import NavBar from "../NavBar";

const HomePage = () => {
  return (
    <div className="main-container">
      <div
        className="flex flex-col justify-center items-center relative"
        style={{
          position: "relative",
          right: "0",
        }}
      >
        <Images />
        <HomeText />
        <Button />
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
