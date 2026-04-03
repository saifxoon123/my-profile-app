return <h1>TEST PAGE</h1>;
"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setData(null));
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

    alert("Uploaded");
    window.location.reload();
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h2>Profile Page</h2>

        <img
          src={data?.photo || "https://via.placeholder.com/120"}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "10px"
          }}
        />

        <p>Name: {data?.name || "No Name"}</p>
        <p>Email: {data?.email || "No Email"}</p>

        <input type="file" onChange={upload} />
      </div>
    </div>
  );
}