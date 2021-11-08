// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuNiBWUDKeDM7DgZpw08Up3gH8wwhhqfk",
  authDomain: "blog-100bc.firebaseapp.com",
  projectId: "blog-100bc",
  storageBucket: "blog-100bc.appspot.com",
  messagingSenderId: "678510910602",
  appId: "1:678510910602:web:74c60d9056919e8ff2a173",
  measurementId: "G-HL59RKLDWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);