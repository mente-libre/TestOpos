import * as admin from 'firebase-admin';

let db: admin.firestore.Firestore | null = null;

try {
  if (process.env.NODE_ENV === 'production') {
    // En producción (ej. Vercel), usa las variables de entorno
    if (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL) {
      const serviceAccount = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        privateKey: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
        clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
      };

      if (admin.apps.length === 0) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        db = admin.firestore();
        console.log("Firebase Admin SDK initialized for production.");
      }
    } else {
      console.warn("Production environment detected, but Firebase Admin credentials are not fully set in environment variables.");
    }
  } else {
    // En desarrollo, intenta usar el fichero de cuenta de servicio
    try {
      const serviceAccount = require('../../../serviceAccountKey.json');
       if (admin.apps.length === 0) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        db = admin.firestore();
        console.log("Firebase Admin SDK initialized for development using serviceAccountKey.json.");
      }
    } catch (e) {
      console.warn("Could not initialize Firebase Admin SDK for development. ",
        "Did you download your serviceAccountKey.json? ",
        "Falling back to application default credentials if available.", e);
      // Si falla, intenta con las credenciales por defecto (útil en algunos entornos de Google Cloud)
      if (admin.apps.length === 0) {
        admin.initializeApp();
        db = admin.firestore();
        console.log("Firebase Admin SDK initialized with Application Default Credentials.");
      }
    }
  }
} catch (error) {
  console.error("Critical error initializing Firebase Admin SDK:", error);
}

export { db };
