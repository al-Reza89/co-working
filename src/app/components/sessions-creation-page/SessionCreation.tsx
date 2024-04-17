import React from "react";
import Header from "../signup-page/Header";
import Logo from "./Logo";
import ActiveMember from "./ActiveMember";
import StartSession from "./StartSession";
import NavBar from "../NavBar";

const SessionCreation = () => {
  return (
    <div className="main-container2">
      <div className="relative ">
        <Header />
        <Logo />
        <ActiveMember />
        <StartSession />
        <NavBar />
      </div>
    </div>
  );
};

export default SessionCreation;
