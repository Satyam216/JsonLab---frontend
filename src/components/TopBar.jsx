import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import logo from "/jsonlab-logo.png";

export default function TopBar({ onAuthMode }) {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-[#2A2B2E]">

      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="JsonLab Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl font-bold text-emerald-400 tracking-wide">
          JsonLab
        </h1>
      </div>

      {!user ? (
        <div className="flex gap-3">
          <button
            onClick={() => onAuthMode("login")}
            className="px-3 py-1 rounded border border-gray-600 hover:bg-[#262729]"
          >
            Login
          </button>
          <button
            onClick={() => onAuthMode("signup")}
            className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-700"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <button
          onClick={() => signOut(auth)}
          className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      )}
    </div>
  );
}
