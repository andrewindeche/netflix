import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBM4_MbUa9_kAIpzkUSDJH-46BljTHORFQ",
  authDomain: "guileless-concha-10401f.firebaseapp.com",
  projectId: "guileless-concha-10401f",
  storageBucket: "guileless-concha-10401f.appspot.com",
  messagingSenderId: "282519930794",
  appId: "1:282519930794:web:ec19124726ccff3bbc0dd3",
  measurementId: "G-0EMFJ3T9B6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
