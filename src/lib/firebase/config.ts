import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";

// This file is now only used for CLIENT-SIDE auth, not Firestore.
// Firestore will be accessed via server actions.

// TEMPORARY DEBUGGING STEP: Hardcoding credentials to isolate environment variable issues.
const firebaseConfig = {
  apiKey: "AIzaSyDBCmF-I1zB_B_3SEErilDfczpvIZ7P7IY",
  authDomain: "studio-4528893091-16285.firebaseapp.com",
  projectId: "studio-4528893091-16285",
  storageBucket: "studio-4528893091-16285.firebasestorage.app",
  messagingSenderId: "1018687891954",
  appId: "1:1018687891954:web:9770511dd186c68647236b"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export default app;
