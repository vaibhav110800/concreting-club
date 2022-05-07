import firebase from "firebase/compat/app";

// Optionally import the services that you want to use
// import "firebase/compat/auth";
// import "firebase/compat/database";
import "firebase/compat/firestore";
//import "firebase/compat/functions";
//import "firebase/compat/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCI6dbQxyX_k0JXmW6aFXwCDY0CAwp1Rjk",
  authDomain: "concreting-club.firebaseapp.com",
  projectId: "concreting-club",
  storageBucket: "concreting-club.appspot.com",
};

let app;
if (firebase.apps.length === 0) app = firebase.initializeApp(firebaseConfig);
else app = firebase.app();
const db = app.firestore();
export default db;
