import * as admin from 'firebase-admin';

// Helper function to check if the SDK is initialized
function isFirebaseAdminInitialized(): boolean {
    return admin.apps.length > 0;
}

let adminInstancePromise: Promise<admin.app.App> | null = null;

function initializeFirebaseAdmin(): Promise<admin.app.App> {
    if (adminInstancePromise) {
        return adminInstancePromise;
    }

    adminInstancePromise = new Promise(async (resolve, reject) => {
        if (isFirebaseAdminInitialized()) {
            resolve(admin.app());
            return;
        }
        
        console.log("Firebase Admin SDK not initialized. Attempting to initialize...");
        let serviceAccount: admin.ServiceAccount | undefined;

        if (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL) {
            console.log("Found Firebase credentials in environment variables.");
            serviceAccount = {
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                privateKey: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
                clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
            };
        } 

        if (serviceAccount) {
            try {
                const app = admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                });
                console.log("Firebase Admin SDK initialized successfully.");
                resolve(app);
            } catch (error) {
                if (typeof error === 'object' && error !== null && 'code' in error && (error as { code: string }).code === 'app/duplicate-app') {
                    console.log("Firebase Admin SDK already initialized.");
                    resolve(admin.app());
                } else {
                    console.error("CRITICAL: Error initializing Firebase Admin SDK:", error);
                    reject(new Error("Firebase Admin SDK initialization failed."));
                }
            }
        } else {
             reject(new Error("CRITICAL: Firebase Admin SDK credentials not found. Please set the required environment variables."));
        }
    });

    return adminInstancePromise;
}

export const getFirestore = async (): Promise<admin.firestore.Firestore> => {
    await initializeFirebaseAdmin();
    return admin.firestore();
};
