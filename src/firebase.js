// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHMmFpOvO7N1RWYgZ7aAsm53wXm6TQEUw",
  authDomain: "studify-18f4f.firebaseapp.com",
  projectId: "studify-18f4f",
  storageBucket: "studify-18f4f.appspot.com",
  messagingSenderId: "1050088679655",
  appId: "1:1050088679655:web:597a2e2893f46f553ada42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);