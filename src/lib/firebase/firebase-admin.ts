
import admin from 'firebase-admin';
import 'dotenv/config';

let db: admin.firestore.Firestore | null = null;

async function initializeFirebaseAdmin(): Promise<admin.firestore.Firestore> {
    if (db) {
        return db;
    }

    // Check if already initialized
    if (admin.apps.length > 0) {
        console.log("Firebase Admin SDK already initialized.");
        db = admin.firestore();
        return db;
    }

    const serviceAccount: admin.ServiceAccount | undefined =
        process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
        process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL
            ? {
                  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                  privateKey: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
                  clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
              }
            : undefined;

    if (!serviceAccount) {
        console.error("CRITICAL: Firebase Admin SDK credentials not found. Please set the required environment variables.");
        throw new Error("Firebase Admin SDK credentials not found.");
    }

    try {
        console.log("Initializing Firebase Admin SDK...");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        console.log("Firebase Admin SDK initialized successfully.");
        db = admin.firestore();
        return db;
    } catch (error: any) {
        // If the error is that the app already exists, it means we are in a hot-reload environment
        if (error.code === 'app/duplicate-app') {
             console.log("Caught duplicate-app error, returning existing instance.");
             db = admin.firestore();
             return db;
        }
        console.error("CRITICAL: Error initializing Firebase Admin SDK:", error);
        throw new Error("Firebase Admin SDK initialization failed.");
    }
}

export const getFirestore = async (): Promise<admin.firestore.Firestore> => {
    return await initializeFirebaseAdmin();
};
