'use client';

import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  type User
} from "firebase/auth";
import app from "./config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Set the authDomain for popup operations to ensure correct redirects
auth.tenantId = null; // Ensure we're not in a multi-tenant context
auth.useDeviceLanguage();


export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    return null;
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
}

export const signOut = async () => {
    try {
        await firebaseSignOut(auth);
    } catch (error) {
        console.error("Error signing out: ", error);
    }
}

export type { User };
