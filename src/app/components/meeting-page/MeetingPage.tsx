import React from "react";
import Header from "../signup-page/Header";
import MeetingImages from "./MeetingImages";
import NavBar from "../NavBar";

const MeetingPage = () => {
  return (
    <div className="main-container2  ">
      <div
        className=" flex flex-col justify-center items-center "
        style={{
          position: "relative",
        }}
      >
        <Header />
        <MeetingImages />
        <NavBar />
      </div>
    </div>
  );
};

export default MeetingPage;
