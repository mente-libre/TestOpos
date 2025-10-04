import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";

// This file is now only used for CLIENT-SIDE auth, not Firestore.
// Firestore will be accessed via server actions.

const firebaseConfig = {
  apiKey: "AIzaSyDBCmF-I1zB_B_3SEErilDfczpvIZ7P7IY",
  authDomain: "testopos-proyects.firebaseapp.com",
  projectId: "testopos-proyects",
  storageBucket: "testopos-proyects.appspot.com",
  messagingSenderId: "590229889399",
  appId: "1:590229889399:web:3154c131fc6eb423f8c5ca"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export default app;
