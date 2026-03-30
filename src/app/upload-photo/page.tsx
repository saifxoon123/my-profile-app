"use client";

import { useState } from "react";

export default function UploadPhoto() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const uploadImage = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    alert("Upload Complete");
  };

  const handleFileChange = (e: any) => {
    const selected = e.target.files[0];
    setFile(selected);

    if (selected) {
      const imageUrl = URL.createObjectURL(selected);
      setPreview(imageUrl);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Upload Profile Photo</h1>

      <input
        type="file"
        onChange={handleFileChange}
      />

      <br />
      <br />

      {preview && (
        <img
          src={preview}
          width="200"
          style={{ borderRadius: "10px" }}
        />
      )}

      <br />
      <br />

      <button onClick={uploadImage}>
        Upload Photo
      </button>
    </div>
  );
}