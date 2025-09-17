
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";

// This file is now only used for CLIENT-SIDE auth, not Firestore.
// Firestore will be accessed via server actions.

const firebaseConfig = {
  projectId: "studio-4528893091-676f0",
  appId: "1:675547564853:web:f9793d2b360402309b5a7c",
  storageBucket: "studio-4528893091-676f0.firebasestorage.app",
  apiKey: "AIzaSyAWQJQNadcpABNfvxGQXIEwRAAoDN-m9Iw",
  authDomain: "studio-4528893091-676f0.firebaseapp.com",
  messagingSenderId: "675547564853",
  databaseURL: "https://studio-4528893091-676f0.firebaseio.com"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export default app;
