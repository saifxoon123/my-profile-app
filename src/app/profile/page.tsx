"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [newName, setNewName] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  // 🔄 Load user
  const loadUser = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  // 📸 Upload photo
  const uploadPhoto = async () => {
    if (!file) {
      alert("Select photo first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    alert("Photo Updated");
    loadUser();
  };

  // 🗑️ Delete photo
  const deletePhoto = async () => {
    await fetch("/api/delete-photo", {
      method: "POST",
    });

    alert("Photo Deleted");
    loadUser();
  };

  // ✏️ Update name
  const updateName = async () => {
    if (!newName) {
      alert("Enter new name");
      return;
    }

    await fetch("/api/profile/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });

    alert("Name Updated");
    loadUser();
  };

  // 🔐 Change password
  const changePassword = async () => {
    await fetch("/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword: newPassword2,
      }),
    });

    alert("Password Changed");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px] text-center">

        <h1 className="text-2xl font-bold mb-4">My Profile</h1>

        {!user && <p>Loading...</p>}

        {user && (
          <>
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              {user.photo ? (
                <img
                  src={user.photo}
                  className="w-24 h-24 rounded-full object-cover border"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  No Photo
                </div>
              )}
            </div>

            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>

            {/* Update Name */}
            <input
              className="w-full border p-2 mt-4 rounded-lg"
              placeholder="New name"
              onChange={(e) => setNewName(e.target.value)}
            />

            <button
              onClick={updateName}
              className="w-full bg-blue-500 text-white p-2 mt-2 rounded-lg"
            >
              Update Name
            </button>

            {/* Upload Photo */}
            <input
              type="file"
              className="mt-4"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            <button
              onClick={uploadPhoto}
              className="w-full bg-green-500 text-white p-2 mt-2 rounded-lg"
            >
              Upload Photo
            </button>

            {/* Delete Photo */}
            <button
              onClick={deletePhoto}
              className="w-full bg-red-500 text-white p-2 mt-2 rounded-lg"
            >
              Delete Photo
            </button>

            {/* Change Password */}
            <input
              type="password"
              placeholder="Old Password"
              className="w-full border p-2 mt-4 rounded-lg"
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-2 mt-2 rounded-lg"
              onChange={(e) => setNewPassword2(e.target.value)}
            />

            <button
              onClick={changePassword}
              className="w-full bg-purple-500 text-white p-2 mt-2 rounded-lg"
            >
              Change Password
            </button>
          </>
        )}

      </div>
    </div>
  );
}