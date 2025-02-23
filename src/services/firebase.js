// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_wn8uvKnRgWAoNvnh7tyf-aKMDw23Mic",
  authDomain: "login-signup-a5861.firebaseapp.com",
  projectId: "login-signup-a5861",
  storageBucket: "login-signup-a5861.firebasestorage.app",
  messagingSenderId: "256916401041",
  appId: "1:256916401041:web:738fd3ede47b5bda428830",
  measurementId: "G-6T7GSZ9E15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initializing Authentication of Firebase
export const auth = getAuth(app);