"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const logout = async () => {
  await fetch("/api/logout");
  window.location.href = "/login";
};

  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {

    fetch("/api/me")
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });

  }, []);

  const handleLogout = async () => {

    await fetch("/api/logout", {
      method: "POST"
    });

    router.push("/");

  };

  return (
    <div>
      return (
  <div>

    <h1>Dashboard</h1>

    <button onClick={logout}>
      Logout
    </button>

  </div>
);

      <h1>Dashboard Home 🏠</h1>

      {user && (
        <p>
          Logged in as: <b>{user.email}</b>
        </p>
      )}

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>
  );
}