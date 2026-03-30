"use client";

import { useState } from "react";

export default function TestLogin() {
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "saif@example.com",
        password: "123456",
      }),
    });

    const data = await res.json();
    setMessage(JSON.stringify(data));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Test Login</h1>
      <button onClick={handleLogin}>Login User</button>
      <p>{message}</p>
    </div>
  );
}