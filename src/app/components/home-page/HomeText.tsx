import React from "react";

const HomeText = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className=""
        style={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "30.24px",
          textAlign: "center",
          fontFamily: "Sora",
          position: "absolute",
          top: "277px",
        }}
      >
        Coworking.live
      </h1>
      <h4
        className=" text-[#515684] "
        style={{
          fontFamily: "Sora",
          lineHeight: "16.56px",
          textAlign: "center",
          fontWeight: 400,
          fontSize: "12px",
          position: "absolute",
          top: "341px",
        }}
      >
        First Session is free!
      </h4>
      <div className="flex items-center justify-center" style={{}}>
        <h1
          className="text-[#050926]"
          style={{
            fontFamily: "Sora",
            lineHeight: "25.2px",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "20px",
            position: "absolute",
            top: "409px",
          }}
        >
          Sign up to continue
        </h1>
        <h3
          className="text-[#515684]  "
          style={{
            fontFamily: "Sora",
            lineHeight: "16.56px",
            textAlign: "center",
            fontWeight: 300,
            fontSize: "12px",
            position: "absolute",
            top: "441px",
          }}
        >
          Simple steps to get through then you will be <br></br> able to
          continue to hister.ai
        </h3>
      </div>
    </div>
  );
};

export default HomeText;
