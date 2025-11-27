"use client";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render ke: {renderCount.current}</p>

      <button onClick={() => setCount(count + 1)}>Tambah </button>
    </div>
  );
}
