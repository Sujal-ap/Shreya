// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxIsCXevLm9Ig3Pl75cXnbVlX_TXqeHw",
  authDomain: "fir-9452.firebaseapp.com",
  projectId: "fir-9452",
  storageBucket: "fir-9452.appspot.com",
  messagingSenderId: "296617197733",
  appId: "1:296617197733:web:e387c56a7224571f32cd4c",
  measurementId: "G-BL7EF450WE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

// Export the initialized Firebase app and auth modules
export { firebaseApp, auth, GoogleAuthProvider, signInWithPopup };
