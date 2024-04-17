import React from "react";
import Images from "../home-page/Images";
import Verified from "../verified";
import NavBar from "../NavBar";

const VerityEmailPage = () => {
  return (
    <div className="main-container">
      <div className="relative flex flex-col justify-center items-center">
        <Images />
        <Verified
          title="Verify Your Email"
          message={`We have sent verification email to your inbox.
          Please head there.`}
        />
        <NavBar />
      </div>
    </div>
  );
};

export default VerityEmailPage;
