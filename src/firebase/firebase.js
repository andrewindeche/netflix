// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7xAqotkbyumGhjpmXS84e48KrRIijAw",
  authDomain: "netflixclone-ad7b1.firebaseapp.com",
  projectId: "netflixclone-ad7b1",
  storageBucket: "netflixclone-ad7b1.appspot.com",
  messagingSenderId: "868889073073",
  appId: "1:868889073073:web:52c40e8d285410c0291990",
  measurementId: "G-MTM4LQR8KT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export default firebaseApp;
