// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyy8fLBLYenRSOisQh6c_T9slpa5T92b0",
  authDomain: "online-job-portal-1d0fa.firebaseapp.com",
  projectId: "online-job-portal-1d0fa",
  storageBucket: "online-job-portal-1d0fa.appspot.com",
  messagingSenderId: "1034291259431",
  appId: "1:1034291259431:web:64cba9034d1371998d0602",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };