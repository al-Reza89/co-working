import React from "react";
import Header from "../signup-page/Header";
import FeedbackLogo from "./FeedbackLogo";
import NavBar from "../NavBar";

const FeedBackPage = () => {
  return (
    <div className="main-container2  ">
      <div
        className=" flex flex-col justify-center items-center "
        style={{
          position: "relative",
        }}
      >
        <Header />
        <FeedbackLogo />
        <NavBar />
      </div>
    </div>
  );
};

export default FeedBackPage;
