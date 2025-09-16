
import { initializeApp, getApps, App, cert, getApp } from 'firebase-admin/app';

const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;

let app: App | undefined;

if (serviceAccountString) {
    const serviceAccount = JSON.parse(serviceAccountString);
    if (!getApps().length) {
      app = initializeApp({
        credential: cert(serviceAccount),
      });
    } else {
      app = getApp();
    }
} else {
    console.warn("FIREBASE_SERVICE_ACCOUNT environment variable is not set. Firebase Admin SDK will not be initialized.");
}


export { app };
