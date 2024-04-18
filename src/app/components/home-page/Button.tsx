"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/signup-page")}
      style={{
        position: "absolute",
        top: "517px",
      }}
      className=" h-[67px] font-bold w-[261px] border-[3px] text-white rounded-[50px] text-center bg-gradient-to-r from-[#050926] to-[#0a1a4f] flex items-center justify-center"
    >
      Free trial
    </button>
  );
};

export default Button;
