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
          zIndex: 2,
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
      <div className="sketchfab-embed-wrapper cube1">
      <iframe
        title="Sci-Fi Cube 01"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        width="440"
        height="280"
        src="https://sketchfab.com/models/bb70561ab6d44540a55c0752fa5e0857/embed?autostart=1&camera=0&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark&dnt=1"
      />
    </div>
    </>
  );
}

export default Banner;
