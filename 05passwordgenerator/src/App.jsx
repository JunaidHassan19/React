import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <div
      style={{
        background: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          background: "#3a3f47",
          boxShadow: "0 4px 10px rgba(173, 108, 108, 0.3)",
        }}
      >
        <h1 style={{ fontSize: "60px" }}>Password Generator</h1>
        <div style={{ marginBottom: "20px", fontSize: "40px" }}>
          <label
            htmlFor="length"
            style={{ marginRight: "10px", fontSize: "40px" }}
          >
            Password Length:
          </label>
          <input
            id="length"
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value) || 0)}
            style={{
              width: "80px",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              textAlign: "center",
            }}
          />
        </div>
        <button
          onClick={generatePassword}
          style={{
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "5px",
            border: "none",
            background: "#61dafb",
            color: "#282c34",
            cursor: "pointer",
            transition: "background 0.3s",
            marginRight: "10px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#52c7e3")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#61dafb")}
        >
          Generate Password
        </button>
        {password && (
          <>
            <button
              onClick={copyToClipboard}
              style={{
                padding: "10px 20px",
                fontSize: "20px",
                borderRadius: "5px",
                border: "none",
                background: "#61dafb",
                color: "#282c34",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#52c7e3")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#61dafb")}
            >
              Copy Password
            </button>
            <div
              style={{
                marginTop: "20px",
                fontSize: "30px",
                color: "white",
                wordBreak: "break-all",
              }}
            >
              <span>{password}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
