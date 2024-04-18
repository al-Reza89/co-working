"use client";
import React from "react";
import Images from "../home-page/Images";
import Verified from "../verified";
import NavBar from "../NavBar";
import { useRouter } from "next/navigation";

const ContinuePage = () => {
  const router = useRouter();
  return (
    <div className="main-container">
      <div
        className="relative flex flex-col justify-center items-center"
        style={{
          position: "relative",
          right: "0",
        }}
      >
        <Images />
        <Verified
          title="Successfully Verified"
          message={`Congratulation now you can start using
        the extenstion`}
        />
        <button
          onClick={() => router.push("/session-creation")}
          style={{
            position: "absolute",
            top: "520px",
          }}
          className=" h-[67px] font-bold w-[261px] border-[3px] text-white rounded-[50px] text-center bg-gradient-to-r from-[#050926] to-[#0a1a4f] flex items-center justify-center"
        >
          Continue
        </button>
        <NavBar />
      </div>
    </div>
  );
};

export default ContinuePage;
