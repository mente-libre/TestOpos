import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";

// This file is now only used for CLIENT-SIDE auth, not Firestore.
// Firestore will be accessed via server actions.

const firebaseConfig = {
  apiKey: "AIzaSyAM3JQNadcpABNfvxQQXTEwRAADN-e9Tw",
  authDomain: "studio-4528893091-676f8.firebaseapp.com",
  projectId: "studio-4528893091-676f8",
  storageBucket: "studio-4528893091-676f8.firebasestorage.app",
  messagingSenderId: "675547564053",
  appId: "1:675547564053:web:f9793d2b360402309b5a7c"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export default app;
