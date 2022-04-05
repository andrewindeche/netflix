import firebase from './firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCU7xAqotkbyumGhjpmXS84e48KrRIijAw",
  authDomain: "netflixclone-ad7b1.firebaseapp.com",
  projectId: "netflixclone-ad7b1",
  storageBucket: "netflixclone-ad7b1.appspot.com",
  messagingSenderId: "868889073073",
  appId: "1:868889073073:web:2d9aae782ffc8c0d291990",
  measurementId: "G-SQ08RVNTJM"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
