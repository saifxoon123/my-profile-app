"use client";

export default function RegisterTest() {

  const registerUser = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Saif",
        email: "test@gmail.com",
        password: "123456",
      }),
    });

    const data = await res.json();
    console.log(data);
    alert("User Registered!");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Register User</h1>
      <button onClick={registerUser}>Register</button>
    </div>
  );
}