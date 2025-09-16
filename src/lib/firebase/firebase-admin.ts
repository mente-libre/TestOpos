
import { initializeApp, getApps, App, cert, getApp } from 'firebase-admin/app';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : undefined;

let app: App;

if (!getApps().length) {
  app = initializeApp({
    credential: cert(serviceAccount!),
  });
} else {
  app = getApp();
}

export { app };
