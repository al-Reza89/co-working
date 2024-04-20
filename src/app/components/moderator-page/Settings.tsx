"use client";
import React, { useState } from "react";
import SettingsButton from "./SettingsButton";
import { useRouter } from "next/navigation";
import DropDown from "./Dropdown";

const minuts = [5, 10, 15, 20, 25, 30];
const languages = ["English", "Spanish", "French"];

const Settings = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "136px",
          width: "350px",
          height: "510px",
          background: "#FFFFFF",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.09)",
        }}
      >
        <div
          style={{
            top: "150px",
            paddingLeft: "10px",
            paddingTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3
            style={{
              fontFamily: "poppins",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "18px",
              color: "#000000",
            }}
          >
            As a session Moderator you have one goal:{" "}
          </h3>
          <h3
            style={{
              fontFamily: "poppins",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "18px",
              color: "#000000",
            }}
          >
            To make sure you and everyone in this room focuses on their goal. We
            help you with tools to make sure you control the experience of your
            room. Start your setup:
          </h3>
        </div>
      </div>
      <SettingsButton
        name1="Name"
        name2="worktime"
        icon={false}
        height="261px"
      />
      <SettingsButton
        name1="Private"
        name2="Public"
        icon={true}
        height="323px"
      />
      <DropDown height="390px" icon={true} minuts={minuts} name1="Duration" />
      <DropDown height="454px" icon={true} minuts={minuts} name1="Pause" />
      <DropDown
        height="518px"
        icon={true}
        languages={languages}
        name1="Language"
      />

      <button
        onClick={() => router.push("/worktime-page")}
        style={{
          position: "absolute",
          top: "590px",
          height: "36px",
          width: "260px",
          backgroundColor: "#0E71EB",
          color: "#ffffff",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "400",
          borderRadius: "10px",
        }}
      >
        Start Session
      </button>
    </div>
  );
};

export default Settings;
