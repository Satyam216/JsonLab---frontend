import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function AuthPanel({ mode, onDone }) {
  const isLogin = mode === "login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      onDone();
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[380px] bg-[#1F2023] p-6 rounded-lg shadow-lg space-y-4">

        <h2 className="text-xl font-bold text-emerald-400 text-center">
          {isLogin ? "Login to JsonLab" : "Create JsonLab Account"}
        </h2>

        <input
          className="w-full p-2 bg-[#131416] rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 bg-[#131416] rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 py-2 rounded font-semibold"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        <div className="text-center text-gray-400 text-sm">OR</div>

        <button
          onClick={() => signInWithPopup(auth, googleProvider)}
          className="w-full flex items-center justify-center gap-3 border border-gray-600 py-2 rounded hover:bg-[#262729]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

      </div>
    </div>
  );
}
