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
      >
        <h1 style={{ fontSize: 35 }}>
          Showcase Your Apps and Tools to the World
        </h1>
        <p style={{ fontSize: 25, marginTop: 10 }}>Share, Grow, Get Noticed</p>
      </div>
      <div className="wavyBackground"></div>
    </>
  );
}

export default Banner;
