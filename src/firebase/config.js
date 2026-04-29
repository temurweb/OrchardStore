// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3xMYz1oXpeyUmAwxEclxj_rXnvfIhDOw",
  authDomain: "orchard-store-fef45.firebaseapp.com",
  projectId: "orchard-store-fef45",
  storageBucket: "orchard-store-fef45.firebasestorage.app",
  messagingSenderId: "526175031345",
  appId: "1:526175031345:web:a193c3f5c976f2dbe84510",
  measurementId: "G-XW0V3Y3Q5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
