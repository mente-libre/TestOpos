
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5I4SD4I24LmJ2TDjkedDTt01V35F58Y8",
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
