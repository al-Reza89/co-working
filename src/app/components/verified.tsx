import React from "react";

interface VerifiedProps {
  title: string;
  message: string;
}

const verified: React.FC<VerifiedProps> = ({ title, message }) => {
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
          {title}
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
          {message.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default verified;
