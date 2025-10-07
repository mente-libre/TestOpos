import * as admin from 'firebase-admin';

let db: admin.firestore.Firestore | null = null;
const isInitialized = admin.apps.length > 0;

if (!isInitialized) {
  let serviceAccount: admin.ServiceAccount | undefined;

  if (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    serviceAccount = {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      privateKey: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    };
    console.log("Attempting to initialize Firebase Admin with environment variables.");
  } else {
    try {
      serviceAccount = require('../../../serviceAccountKey.json');
      console.log("Attempting to initialize Firebase Admin with serviceAccountKey.json.");
    } catch (e) {
      console.warn(
        'Firebase Admin initialization failed. Neither environment variables nor serviceAccountKey.json were found.'
      );
    }
  }

  if (serviceAccount) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      db = admin.firestore();
      console.log("Firebase Admin SDK initialized successfully.");
    } catch (error) {
      console.error("Critical error initializing Firebase Admin SDK:", error);
    }
  }
} else {
  db = admin.firestore();
}

export { db };
