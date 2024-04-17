import React from "react";
import Header from "../signup-page/Header";
import WorktimeContent from "./WorktimeContent";
import NavBar from "../NavBar";

const Worktime = () => {
  return (
    <div className="main-container2">
      <div className="relative " style={{}}>
        <Header />
        <WorktimeContent />
        <NavBar />
      </div>
    </div>
  );
};

export default Worktime;
