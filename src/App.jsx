import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";

export default function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  async function sendData() {
    try {
      const res = await axios.post(`${API_BASE_URL}/api/save`, { name });
      setResponse(res.data.message);
    } catch (err) {
      setResponse("Error connecting to backend.");
    }
  }

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>SadiqmlData Frontend</h1>
      <p>Connected to Render backend.</p>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <button
        style={{
          padding: "10px 20px",
          marginLeft: 10,
          cursor: "pointer",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: 5
        }}
        onClick={sendData}
      >
        Submit
      </button>

      <p style={{ marginTop: 20, color: "green" }}>{response}</p>
    </div>
  );
}
