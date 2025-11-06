// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Enter your Firebase API key",
  authDomain: "Enter your Firebase Auth domain",
  projectId: "Enter your Firebase Project ID",
  storageBucket: "Enter your Firebase Storage bucket",
  messagingSenderId: "Enter your Firebase Messaging sender ID",
  appId: "Enter your Firebase App ID",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
