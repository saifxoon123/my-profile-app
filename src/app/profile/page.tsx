"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("/api/profile");
      const data = await res.json();

      setUser(data);
      setPhoto(data.photo || "");
    };

    fetchProfile();
  }, []);

  const uploadPhoto = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setPhoto(data.url);
  };

  const deletePhoto = async () => {
    await fetch("/api/delete-photo", {
      method: "DELETE",
    });

    setPhoto("");
  };

  if (!user) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>Profile</h1>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      {/* 🔥 IMAGE */}
      {photo ? (
        <img
          src={photo}
          alt="profile"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            marginTop: 10,
            objectFit: "cover",
            border: "2px solid black",
          }}
        />
      ) : (
        <p>No photo</p>
      )}

      {/* 🔥 UPLOAD */}
      <input type="file" onChange={uploadPhoto} style={{ marginTop: 10 }} />

      {/* 🔥 DELETE */}
      <button
        onClick={deletePhoto}
        style={{
          background: "red",
          color: "white",
          padding: "8px 12px",
          marginTop: 10,
          borderRadius: 6,
        }}
      >
        Delete Photo
      </button>
    </div>
  );
}