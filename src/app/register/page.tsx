"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const registerUser = async () => {

    const res = await fetch("/api/register",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({name,email,password})
    });

    const data = await res.json();

    if(res.ok){
      alert("Account created");
      router.push("/login");
    }else{
      alert(data.error);
    }

  };

  return(
    <div style={{padding:"40px"}}>

      <h1>Create Account</h1>

      <input
      placeholder="Name"
      onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={registerUser}>
        Register
      </button>

    </div>
  )
}