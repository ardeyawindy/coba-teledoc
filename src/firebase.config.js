// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPvkkPYw3LO5q86-kNjbJA55m5iGQ65W4",
  authDomain: "otp-teledoc-5c04e.firebaseapp.com",
  projectId: "otp-teledoc-5c04e",
  storageBucket: "otp-teledoc-5c04e.appspot.com",
  messagingSenderId: "1038933747144",
  appId: "1:1038933747144:web:d428dc1f33fc229fe30cfd",
  measurementId: "G-E3YZPN8M84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
