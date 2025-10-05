
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSy0BQnF-tTzB_B-3SEERi1DfdzpvIZ7P7IY",
  authDomain: "studio-4528893091-16285.firebaseapp.com",
  projectId: "studio-4528893091-16285",
  storageBucket: "studio-4528893091-16285.appspot.com",
  messagingSenderId: "1018687891954",
  appId: "1:1018687891954:web:9770511dd18c68647236b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
