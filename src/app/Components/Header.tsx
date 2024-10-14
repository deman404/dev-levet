"use client";

import { useState } from "react";
import Bottom from "./Bottom";
import Login from "./Login";

function Header() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = (): void => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <div
        style={{
          width: "60%",
          height: 60,
          background: "#ffffff",
          marginTop: 10,
          borderRadius: 10,
          position: "fixed",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#181920" }}>DevLevet</h1>
        <Bottom title="Login" onClick={toggleVisibility} />
      </div>
      {isVisible && <Login onClose={toggleVisibility} />}
    </>
  );
}

export default Header;
