"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 🟢 Load profile
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  // 🟢 Upload photo
  const handleUpload = async (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    // 🔥 reload after upload
    window.location.reload();
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">

        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        {/* 🟢 Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photo || "https://via.placeholder.com/120"}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>

        {/* 🟢 Info */}
        <p className="mb-2"><strong>Name:</strong> {user?.name}</p>
        <p className="mb-4"><strong>Email:</strong> {user?.email}</p>

        {/* 🟢 Upload */}
        <input
          type="file"
          onChange={handleUpload}
          className="w-full border p-2 rounded-lg"
        />

      </div>
    </div>
  );
}