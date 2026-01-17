import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  async function addTransaction() {
    await addDoc(collection(db, "transactions"), {
      amount,
      type,
      createdAt: new Date()
    });
    alert("Saved");
    setAmount("");
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>AI Accountant Dashboard</h1>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select onChange={e => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button onClick={addTransaction}>Save Transaction</button>
    </main>
  );
  }
function aiMessage(income, expense) {
  if (expense > income) {
    return "⚠️ You are overspending. Reduce expenses.";
  }
  return "✅ You are financially stable.";
}
