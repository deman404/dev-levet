"use client";
import { IoClose } from "react-icons/io5";

interface LoginProps {
  onClose: () => void;
}

function Login({ onClose }: LoginProps) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#0000007e",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "80%",
          width: "60%",
          background: "#ffffff",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: 10,
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <IoClose
            size={18}
            onClick={onClose}
            style={{
              color: "#000",
              cursor: "pointer",
              position: "relative",
              left: 0,
            }}
          />
        </div>
        <h1 style={{ color: "#000" }}>Login</h1>
        <input
          className="input"
          type="text"
          style={{
            width: "50%",
            height: 30,
            border: "none",
            background: "#ededed",
            borderRadius: 5,
            marginTop: 15,
            padding:10
          }}
          required={true}
        />
      </div>
    </div>
  );
}

export default Login;
