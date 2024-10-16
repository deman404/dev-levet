"use client";

import { useState } from "react";
import Bottom from "./Bottom";
import Login from "./Login";
import Image from "next/image";
import Logo from "../../tools/images/DevElevet.png";

function Header() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = (): void => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <div
      className="bgTransparent"
        style={{
          width: "100vw",
          height: 80,
          position: "fixed",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 3,
          borderBottomColor: "#ededed",
          borderBottomWidth: 5,
        }}
      >
        <Image src={Logo} width={180} alt="Picture of the author" />
        <Bottom title="Login" onClick={toggleVisibility} />
      </div>
      {isVisible && <Login onClose={toggleVisibility} />}
    </>
  );
}

export default Header;
