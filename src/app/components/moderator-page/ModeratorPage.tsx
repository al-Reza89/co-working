import React from "react";
import Header from "../signup-page/Header";
import ModeratorDescription from "./ModeratorDescription";
import Settings from "./Settings";
import NavBar from "../NavBar";

const ModeratorPage = () => {
  return (
    <div className="main-container2">
      <div
        className="relative "
        style={{
          position: "relative",
          right: "0",
        }}
      >
        <Header />
        <ModeratorDescription />
        <Settings />
        <NavBar />
      </div>
    </div>
  );
};

export default ModeratorPage;
