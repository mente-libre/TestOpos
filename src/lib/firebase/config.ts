
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: "studio-4528893091-16285.firebaseapp.com",
  projectId: "studio-4528893091-16285",
  storageBucket: "studio-4528893091-16285.firebasestorage.app",
  messagingSenderId: "1018687891954",
  appId: "1:1018687891954:web:5a72364abc16024847236b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
