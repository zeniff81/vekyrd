// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//import { firebase } from "@firebase/app";
import firebase from "firebase/app";

// Add the Firebase products that you want to use
require("firebase/storage");
require("firebase/auth");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM8uWn6q9iAGAVzTVwHUOVXNggAlFqV6M",
  authDomain: "veky-4355e.firebaseapp.com",
  projectId: "veky-4355e",
  storageBucket: "veky-4355e.appspot.com",
  messagingSenderId: "283809761397",
  appId: "1:283809761397:web:c78cc96ba8d2e24736503c",
  measurementId: "G-K3917TEWY8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
