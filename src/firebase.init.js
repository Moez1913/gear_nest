// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACzEBHFBFAEQH8ZvZf5pfUAj7nz-7GAdQ",
  authDomain: "gearnest-45ca6.firebaseapp.com",
  projectId: "gearnest-45ca6",
  storageBucket: "gearnest-45ca6.firebasestorage.app",
  messagingSenderId: "248188121206",
  appId: "1:248188121206:web:2fca668c39106a251b6f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);