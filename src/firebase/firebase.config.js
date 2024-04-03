// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHRZGy3kRA4E6hYhaBRFIyfDnM-q4oAZ0",
  authDomain: "auth-firebase-c5d4b.firebaseapp.com",
  projectId: "auth-firebase-c5d4b",
  storageBucket: "auth-firebase-c5d4b.appspot.com",
  messagingSenderId: "688350989729",
  appId: "1:688350989729:web:7dcd0c56b6520528204fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, app}