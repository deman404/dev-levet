"use client";

import bg1 from "../../tools/images/bg1.png";
import bg2 from "../../tools/images/bg2.png";
import Image from "next/image";

function Banner() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex:2,
        }}
        className="bgXrota"
      >
        <h1 style={{ fontSize: 35 }}>
          Showcase Your Apps and Tools to the World
        </h1>
        <p style={{ fontSize: 25, marginTop: 10 }}>Share, Grow, Get Noticed</p>
      </div>
      <Image src={bg1} alt="Picture of the author" className="bg1" />
      <Image src={bg2} alt="Picture of the author" className="bg2" />
      
    </>
  );
}

export default Banner;
