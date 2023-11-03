// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Tapnx__x-fwk3eI4zhRPoHF15qizlc0",
  authDomain: "auth-dev-66d95.firebaseapp.com",
  projectId: "auth-dev-66d95",
  storageBucket: "auth-dev-66d95.appspot.com",
  messagingSenderId: "919433840255",
  appId: "1:919433840255:web:8799bc3cfc80691541e14a",
  measurementId: "G-LXXZ84X8RX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
