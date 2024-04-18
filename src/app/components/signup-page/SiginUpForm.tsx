"use client";
import React, { useState } from "react";
import AdditionalSignUp from "./AdditionalSignUp";
import { useRouter } from "next/navigation";

const SiginUpForm = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "sora",
          position: "absolute",
          top: "79px",
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "30.24px",
          color: "#050926",
        }}
      >
        Sign up to continue
      </h1>
      <h3
        style={{
          position: "absolute",
          top: "116px",
          color: "#515684",
          fontFamily: "sora",
          fontSize: "13px",
          fontWeight: "400",
          lineHeight: "16.56px",
          textAlign: "center",
          marginTop: "2px",
        }}
      >
        Fill the following form
      </h3>
      <form
        onClick={() => router.push("/continue-page")}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            position: "absolute",
            top: "167px",
            backgroundColor: "#ffffff",
            width: "340px",
            height: "61px",
            border: "1px solid #E0E0E0",
            borderRadius: "50px",
            paddingLeft: "20px",
          }}
        />
        <input
          type="email"
          placeholder="Set your password"
          style={{
            position: "absolute",
            top: "242px",
            backgroundColor: "#ffffff",
            width: "340px",
            height: "61px",
            border: "1px solid #E0E0E0",
            borderRadius: "50px",
            paddingLeft: "20px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "314px",
            display: "flex",
            left: "38px",
            right: "38px",
          }}
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{ marginRight: "8px" }}
          />
          <span
            style={{
              color: "#515684",
              fontFamily: "sora",
              fontSize: "10px",
              fontWeight: "400",
              lineHeight: "13.8px",
            }}
          >
            I have accepted the Privacy Policy and Terms and Conditions of
            Coworking.live
          </span>
        </div>
        <button
          style={{
            position: "absolute",
            top: "345px",
          }}
          className=" h-[61px] font-bold w-[340px] border-[3px] text-white rounded-[50px] text-center bg-gradient-to-r from-[#050926] to-[#0a1a4f] flex items-center justify-center"
        >
          Sign Up
        </button>
      </form>
      <AdditionalSignUp />
    </div>
  );
};

export default SiginUpForm;
