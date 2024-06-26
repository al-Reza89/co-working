import React from "react";
import Header from "../signup-page/Header";
import SubscriptionPlan from "./SubscriptionPlan";
import NavBar from "../NavBar";

const SessionSubcriptionPage = () => {
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
        <SubscriptionPlan />
        <NavBar />
      </div>
    </div>
  );
};

export default SessionSubcriptionPage;
