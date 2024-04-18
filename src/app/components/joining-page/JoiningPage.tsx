import React from "react";
import Header from "../signup-page/Header";
import JoiningImages from "./JoiningImages";
import NavBar from "../NavBar";

const JoiningPage = () => {
  return (
    <div className="main-container2">
      <div
        style={{
          position: "relative",
          right: "0",
        }}
      >
        <Header />
        <JoiningImages />
        <NavBar />
      </div>
    </div>
  );
};

export default JoiningPage;
