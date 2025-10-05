'use client';

import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  type User,
  type AuthError
} from "firebase/auth";
import { app } from "./config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

auth.useDeviceLanguage();

/**
 * Initiates the Google Sign-In process by redirecting the user.
 */
export const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error starting sign in with Google redirect: ", error);
  }
};

/**
 * Signs in a user with email and password.
 */
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await firebaseSignInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in with email and password: ", error);
    throw error;
  }
};

/**
 * Creates a new user with email and password.
 */
export const createUserWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await firebaseCreateUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error creating user with email and password: ", error);
    throw error;
  }
};

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

// Export the auth instance along with other functions
export { auth, getRedirectResult, onAuthStateChanged };
export type { User };
