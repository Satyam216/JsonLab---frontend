import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxWdAf4Osx7CMAwFlNglCp_-NK7_WEz1s",
  authDomain: "jsonlab-fdf78.firebaseapp.com",
  projectId: "jsonlab-fdf78",
  storageBucket: "jsonlab-fdf78.firebasestorage.app",
  messagingSenderId: "470844229962",
  appId: "1:470844229962:web:777bbfd26b780d569fd9b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
