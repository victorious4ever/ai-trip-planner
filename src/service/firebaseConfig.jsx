// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAHTkQyKt0gN-9_YDkEeRD1pbevETIhRo",
  authDomain: "real-hackathon-7cfb2.firebaseapp.com",
  projectId: "real-hackathon-7cfb2",
  storageBucket: "real-hackathon-7cfb2.firebasestorage.app",
  messagingSenderId: "818317212814",
  appId: "1:818317212814:web:3711d08dc3b3286ddadddf",
  measurementId: "G-TN78J7B2LK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
