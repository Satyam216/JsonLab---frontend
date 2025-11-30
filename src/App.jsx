import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/ping")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white text-2xl">
      Backend says: {msg}
    </div>
  );
}
