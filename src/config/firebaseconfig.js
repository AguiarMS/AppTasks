import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCC9ZugPL66j2y9zs8kA6bpowiwEScICYs",
  authDomain: "task-a648c.firebaseapp.com",
  projectId: "task-a648c",
  storageBucket: "task-a648c.appspot.com",
  messagingSenderId: "444890611386",
  appId: "1:444890611386:web:85d030665bb5bcf6ea8c83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database