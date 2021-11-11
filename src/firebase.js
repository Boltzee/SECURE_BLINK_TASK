import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLYLlxCgifCpUWhPu1ugW_RLuv6qPU1dw",

  authDomain: "poltergeist-01.firebaseapp.com",

  projectId: "poltergeist-01",

  storageBucket: "poltergeist-01.appspot.com",

  messagingSenderId: "465295202267",

  appId: "1:465295202267:web:440575b292fd12a78b79fe",

  measurementId: "G-5XN7THPDG1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export var provider = new GoogleAuthProvider();
var db = getFirestore(app);
export default db;
