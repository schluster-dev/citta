// src/components/Counter.jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border-2 border-blue-500 rounded-lg text-center">
      <h2 className="text-xl font-bold">Counter React</h2>
      <p className="text-2xl my-2">{count}</p>
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Tambah Angka
      </button>
    </div>
  );
}