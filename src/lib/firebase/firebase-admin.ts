
import { initializeApp, getApps, App, cert, getApp } from 'firebase-admin/app';

const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;

let app: App | undefined;

if (serviceAccountString) {
    try {
        const serviceAccount = JSON.parse(serviceAccountString);
        if (!getApps().length) {
          app = initializeApp({
            credential: cert(serviceAccount),
          });
        } else {
          app = getApp();
        }
    } catch (e) {
        console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT:', e);
    }
} else {
    console.warn("FIREBASE_SERVICE_ACCOUNT environment variable is not set. Firebase Admin SDK dependent features (like data seeding) will not work.");
}


export { app };
