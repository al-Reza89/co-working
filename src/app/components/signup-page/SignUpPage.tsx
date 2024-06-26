import React from "react";
import Header from "./Header";
import SiginUpForm from "./SiginUpForm";
import NavBar from "../NavBar";

const SignUpPage = () => {
  return (
    <div className="main-container2  ">
      <div
        className=" flex flex-col justify-center items-center "
        style={{
          position: "relative",
        }}
      >
        <Header />
        <SiginUpForm />
        <NavBar />
      </div>
    </div>
  );
};

export default SignUpPage;
