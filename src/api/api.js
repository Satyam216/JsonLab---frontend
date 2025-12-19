import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// Create axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // 15 sec timeout
});

// OPTIONAL: Interceptor for logging (future auth token)
api.interceptors.request.use((config) => {
  console.log("➡️", config.method?.toUpperCase(), config.url);
  return config;
});

api.interceptors.response.use(
  (res) => {
    console.log("⬅️ Response:", res);
    return res;
  },
  (error) => {
    console.error("❌ Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

console.log("ENV:", import.meta.env.MODE);
console.log("API:", import.meta.env.VITE_API_BASE_URL);
