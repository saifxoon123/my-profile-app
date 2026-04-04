"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState<any>(null);
  const [name, setName] = useState("");

  // 🔥 load user data
  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(res => {
        setData(res);
        setName(res.name);
      });
  }, []);

  // 🔥 upload photo
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

  // 🔥 update name
  const updateProfile = async () => {
  const res = await fetch("/api/profile/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const data = await res.json();

  console.log(data);

  alert("Updated!");
  window.location.reload();
};

  // 🔥 logout
  const logout = async () => {
    await fetch("/api/logout");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          width: "320px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
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
            border: "3px solid #4facfe",
          }}
        />

        <p><b>Email:</b> {data?.email}</p>

        {/* 🔵 Edit Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginTop: "10px",
            padding: "8px",
            width: "100%",
          }}
        />

        <button
          onClick={updateProfile}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Update Name
        </button>

        {/* 📤 Upload */}
        <input
          type="file"
          onChange={upload}
          style={{ marginTop: "15px" }}
        />

        {/* 🔴 Logout */}
        <button
          onClick={logout}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}