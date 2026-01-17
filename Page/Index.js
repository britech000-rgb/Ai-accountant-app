import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [items, setItems] = useState([]);

  function addTransaction() {
    if (!amount) return;
    setItems([...items, { amount, type }]);
    setAmount("");
  }

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
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

      <button onClick={addTransaction}>Add</button>

      <h2>Transactions</h2>
      <ul>
        {items.map((i, index) => (
          <li key={index}>
            {i.type.toUpperCase()} - KES {i.amount}
          </li>
        ))}
      </ul>
    </main>
  );
}
