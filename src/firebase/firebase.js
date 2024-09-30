// Import the necessary functions from Firebase SDK v9+
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyBM4_MbUa9_kAIpzkUSDJH-46BljTHORFQ",
  authDomain: "guileless-concha-10401f.firebaseapp.com",
  projectId: "guileless-concha-10401f",
  storageBucket: "guileless-concha-10401f.appspot.com",
  messagingSenderId: "282519930794",
  appId: "1:282519930794:web:ec19124726ccff3bbc0dd3",
  measurementId: "G-0EMFJ3T9B6"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Set up Google authentication provider
export const provider = new GoogleAuthProvider();

export default firebaseApp;
