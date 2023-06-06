import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbxH1SGaN9TkucHl1W_n750Sz4o1qXjD8",
  authDomain: "svelte-ai-thing.firebaseapp.com",
  projectId: "svelte-ai-thing",
  storageBucket: "svelte-ai-thing.appspot.com",
  messagingSenderId: "181339218565",
  appId: "1:181339218565:web:d179bec46ef48bac83ffec",
  measurementId: "G-9WJK861EW2",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export default firebaseapp;
