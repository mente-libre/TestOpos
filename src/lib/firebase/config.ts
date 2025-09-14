import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "studio-4528893091-676f0",
  appId: "1:675547564853:web:f9793d2b360402309b5a7c",
  storageBucket: "studio-4528893091-676f0.firebasestorage.app",
  apiKey: "AIzaSyAWQJQNadcpABNfvxGQXIEwRAAoDN-m9Iw",
  authDomain: "studio-4528893091-676f0.firebaseapp.com",
  messagingSenderId: "675547564853"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
