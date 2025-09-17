
import { initializeApp, getApps, App, cert, getApp } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let app: App | undefined;
let db: Firestore | undefined;

const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;

if (serviceAccountString) {
    if (getApps().length === 0) {
        try {
            const serviceAccount = JSON.parse(serviceAccountString);
            app = initializeApp({
                credential: cert(serviceAccount)
            });
            db = getFirestore(app);
        } catch (e) {
            console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT or initialize Firebase Admin. Falling back to no-db mode.', e);
            app = undefined;
            db = undefined;
        }
    } else {
        app = getApp();
        db = getFirestore(app);
    }
} else {
    console.warn("FIREBASE_SERVICE_ACCOUNT environment variable not set. Running in no-db mode. App will use local seed data.");
}


export { db };
