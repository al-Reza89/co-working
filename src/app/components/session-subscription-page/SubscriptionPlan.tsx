/* eslint-disable @next/next/no-img-element */
import React from "react";

const SubscriptionPlan = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "105px",
        left: "35px",
        width: "323px",
        height: "538px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "rgba(14, 113, 235, 0.1)",
        fontFamily: "roboto",
        fontSize: "14px",
        fontWeight: "600",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
            }}
          >
            <h1
              style={{
                color: "#424347",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "18.75px",
                fontFamily: "roboto",
              }}
            >
              2 Sessions per day
            </h1>
            <h3
              style={{
                color: "#BBBBBB",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "15.23px",
                fontFamily: "roboto",
              }}
            >
              For occassional focus
            </h3>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2px",
              }}
            >
              <h1
                style={{
                  color: "#424347",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "18.75px",
                  fontFamily: "roboto",
                }}
              >
                $12/Month
              </h1>
              <span
                style={{
                  color: "#8688BC",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "18.75px",
                  fontFamily: "roboto",
                }}
              >
                In stock
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "10px",
            }}
          >
            <img
              style={{
                height: "32px",
                width: "32px",
              }}
              className="object-cover"
              src="SleepyEyes.png"
              alt="person"
            ></img>
            <img
              style={{
                height: "32px",
                width: "32px",
              }}
              className="object-cover"
              src="SleepyEyes.png"
              alt="person"
            ></img>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
            }}
          >
            <h1
              style={{
                color: "#424347",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "18.75px",
                fontFamily: "roboto",
              }}
            >
              Unlimited Sessions
            </h1>
            <h3
              style={{
                color: "#BBBBBB",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "15.23px",
                fontFamily: "roboto",
              }}
            >
              For Focus on mass
            </h3>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2px",
              }}
            >
              <h1
                style={{
                  color: "#424347",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "18.75px",
                  fontFamily: "roboto",
                }}
              >
                $24/Month
              </h1>
              <span
                style={{
                  color: "#8688BC",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "18.75px",
                  fontFamily: "roboto",
                }}
              >
                In stock
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "25px",
            }}
          >
            <img
              style={{
                height: "32px",
                width: "32px",
              }}
              className="object-cover"
              src="EyesCartoon.png"
              alt="person"
            ></img>
          </div>
        </div>
      </div>

      <button
        style={{
          height: "44px",
          width: "261px",
          left: "10px",
          marginBottom: "10px",
          right: "10px",
          backgroundColor: "#0E71EB",
          color: "#ffffff",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "400",
        }}
      >
        Stripe Check Our
      </button>
    </div>
  );
};

export default SubscriptionPlan;
