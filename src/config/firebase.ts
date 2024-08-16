// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_Api_key,
  authDomain: "drive-clone-4c5ac.firebaseapp.com",
  projectId: "drive-clone-4c5ac",
  storageBucket: "drive-clone-4c5ac.appspot.com",
  messagingSenderId: "1058247160985",
  appId: "1:1058247160985:web:3bce8f634d121cb8fab408",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();