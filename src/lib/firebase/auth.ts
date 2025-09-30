'use client';

import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  type User,
  type AuthError
} from "firebase/auth";
import app from "./config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

auth.useDeviceLanguage();

/**
 * Initiates the Google Sign-In process by redirecting the user.
 * The result of the redirect is handled by getRedirectResult 
 * in the AuthProvider.
 */
export const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error starting sign in with Google redirect: ", error);
  }
};

/**
 * Listens for changes in the authentication state.
 */
export const onAuthStateChange = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
}

/**
 * Signs the current user out.
 */
export const signOut = async () => {
    try {
        await firebaseSignOut(auth);
    } catch (error) {
        console.error("Error signing out: ", error);
    }
}

export { getAuth, getRedirectResult };
export type { User };
