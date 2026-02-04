
import admin from 'firebase-admin';
import 'dotenv/config';

let db: admin.firestore.Firestore | null = null;

async function initializeFirebaseAdmin(): Promise<admin.firestore.Firestore> {
    if (db) {
        return db;
    }

    if (admin.apps.length > 0) {
        console.log("Firebase Admin SDK already initialized.");
        db = admin.firestore();
        return db;
    }

    let serviceAccount: admin.ServiceAccount | undefined;

    // The robust, Vercel-friendly method: Base64 encoded service account
    if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
        try {
            console.log("Found FIREBASE_SERVICE_ACCOUNT_BASE64. Decoding and parsing...");
            const decodedServiceAccount = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf-8');
            serviceAccount = JSON.parse(decodedServiceAccount);
            console.log("Service account parsed successfully from Base64.");
        } catch (e) {
            console.error("CRITICAL: Failed to decode or parse FIREBASE_SERVICE_ACCOUNT_BASE64.", e);
            throw new Error("Failed to parse Base64 encoded service account.");
        }
    } else {
         // Fallback for local development or old method
        console.log("FIREBASE_SERVICE_ACCOUNT_BASE64 not found. Trying old method...");
        serviceAccount =
            process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
            process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
            process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL
                ? {
                      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                      privateKey: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
                      clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
                  }
                : undefined;
    }


    if (!serviceAccount) {
        console.error("CRITICAL: Firebase Admin SDK credentials not found. Set FIREBASE_SERVICE_ACCOUNT_BASE64 env var.");
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
