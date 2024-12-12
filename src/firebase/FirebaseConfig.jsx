// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH1xNCeyrM-Vu3awQpR8mc4iFfoTdRBm8",
  authDomain: "pmo-shop.firebaseapp.com",
  projectId: "pmo-shop",
  storageBucket: "pmo-shop.appspot.com",
  messagingSenderId: "9988876534",
  appId: "1:9988876534:web:7c3812d40b7f671a1e24d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }