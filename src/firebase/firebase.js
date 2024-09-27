// Import the necessary functions from Firebase SDK v9+
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyCU7xAqotkbyumGhjpmXS84e48KrRIijAw",
  authDomain: "netflixclone-ad7b1.firebaseapp.com",
  projectId: "netflixclone-ad7b1",
  storageBucket: "netflixclone-ad7b1",
  messagingSenderId: "868889073073",
  appId: "1:868889073073:web:52c40e8d285410c0291990",
  measurementId: "G-MTM4LQR8KT"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Set up Google authentication provider
export const provider = new GoogleAuthProvider();

export default firebaseApp;
