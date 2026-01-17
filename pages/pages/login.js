import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Login successful"))
      .catch(err => alert(err.message));
  }

  return (
    <main style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </main>
  );
  }
