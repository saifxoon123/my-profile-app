"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login(){

  const router = useRouter();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginUser = async () => {

    const res = await fetch("/api/login",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({email,password})
    });

    const data = await res.json();

    if(res.ok){
      router.push("/dashboard");
    }else{
      alert(data.error);
    }

  };

  return(

    <div style={{padding:"40px"}}>

      <h1>Login</h1>

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

      <button onClick={loginUser}>
        Login
      </button>

    </div>

  )

}