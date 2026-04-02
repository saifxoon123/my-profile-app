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

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Profile</h1>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      {photo ? (
        <img
          src={photo}
          alt="profile"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ) : (
        <p>No photo</p>
      )}

      <input type="file" onChange={uploadPhoto} />
    </div>
  );
}