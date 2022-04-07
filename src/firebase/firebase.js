import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCU7xAqotkbyumGhjpmXS84e48KrRIijAw",
  authDomain: "netflixclone-ad7b1.firebaseapp.com",
  projectId: "netflixclone-ad7b1",
  storageBucket: "netflixclone-ad7b1.appspot.com",
  messagingSenderId: "868889073073",
  appId: "1:868889073073:web:bf61685f2d9a2db1291990",
  measurementId: "G-2SW5NXYRJE"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider,storage};
export default db;
