import * as admin from 'firebase-admin';

let db: admin.firestore.Firestore | null = null;

if (admin.apps.length === 0) {
  let serviceAccount: admin.ServiceAccount | undefined;

  // Production / Vercel environment
  if (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    serviceAccount = {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      privateKey: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    };
    console.log("Initializing Firebase Admin with Vercel environment variables.");
  } 
  // Development environment
  else if (process.env.NODE_ENV === 'development') {
    try {
      serviceAccount = require('../../../serviceAccountKey.json');
      console.log("Initializing Firebase Admin with local serviceAccountKey.json.");
    } catch (e) {
      console.warn(
        'Could not find serviceAccountKey.json for local development. Some server features may not work.'
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
  } else {
      console.warn('Firebase Admin SDK could not be initialized. No valid credentials found.');
  }

} else {
  db = admin.firestore();
}

export { db };
