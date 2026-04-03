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

    window.location.reload();
  };

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>PROFILE PAGE</h1>

      <img
        src={data.photo || "https://via.placeholder.com/150"}
        width="150"
      />

      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>

      <input type="file" onChange={upload} />
    </div>
  );
}