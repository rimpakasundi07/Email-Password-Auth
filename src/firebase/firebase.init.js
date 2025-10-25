// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//  DANGER --- Do not share in public
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv8DgGL1CItWPNrT2fJkGN-A6RzXbGGxU",
  authDomain: "email-password-auth-9791b.firebaseapp.com",
  projectId: "email-password-auth-9791b",
  storageBucket: "email-password-auth-9791b.firebasestorage.app",
  messagingSenderId: "1088606260764",
  appId: "1:1088606260764:web:d86f95c174024340ded9d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
