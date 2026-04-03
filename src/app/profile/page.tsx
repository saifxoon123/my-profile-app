"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  const upload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    alert("Upload Done");
    window.location.reload();
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "15px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ marginBottom: "15px" }}>👤 Profile</h2>

        <img
          src={data?.photo || "https://via.placeholder.com/120"}
          alt="profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "3px solid #4facfe"
          }}
        />

        <p><b>Name:</b> {data?.name}</p>
        <p><b>Email:</b> {data?.email}</p>

        <input
          type="file"
          onChange={upload}
          style={{ marginTop: "15px" }}
        />
      </div>
    </div>
  );
}