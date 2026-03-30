"use client";

import { useState } from "react";

export default function TestRegister() {
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Saif",
        email: "saif@example.com",
        password: "123456",
      }),
    });

    const data = await res.json();
    setMessage(JSON.stringify(data));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Test Register</h1>
      <button onClick={handleRegister}>Register User</button>
      <p>{message}</p>
    </div>
  );
}