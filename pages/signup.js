import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Account created successfully"))
      .catch(err => alert(err.message));
  }

  return (
    <main style={{ padding: 20 }}>
      <h2>Create Account</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signup}>Sign Up</button>
    </main>
  );
}
