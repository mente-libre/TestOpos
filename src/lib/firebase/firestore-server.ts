
'use server';

import { db } from './config';
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
  doc,
  limit,
  writeBatch,
  orderBy,
  getCountFromServer,
} from 'firebase/firestore';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006 } from '../seed-data';
import { advoGeneralTest } from '../seed-data-new';
import { officeTest } from '../seed-data-office';
import { type TestResult } from './firestore';

// Constant with category definitions, now centralized on the server
export const CATEGORY_DEFINITIONS = [
    { id: "madrid", name: "Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];

/**
 * Ensures that the initial seed data (demo exams) exists in Firestore.
 * It checks for each seed exam and adds it if it's missing.
 * This function is intended to be called from the server and is idempotent.
 * @returns An object indicating if a write operation was performed.
 */
export const ensureSeedData = async (): Promise<{ hasWritten: boolean }> => {
    try {
        const examsRef = collection(db, 'exams');
        const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest];
        
        const batch = writeBatch(db);
        let batchHasWrites = false;

        for (const seedExam of seedExams) {
             const seedCheckQuery = query(examsRef, where("fileName", "==", seedExam.fileName), limit(1));
             const seedCheckSnapshot = await getDocs(seedCheckQuery);
             if (seedCheckSnapshot.empty) {
                console.log(`Seed exam "${seedExam.fileName}" not found. Adding to batch.`);
                const newExamRef = doc(examsRef);
                batch.set(newExamRef, {
                    ...seedExam,
                    userId: 'system', // Indicates a system-generated exam
                    createdAt: Timestamp.now(),
                });
                batchHasWrites = true;
             }
        }
       
        if (batchHasWrites) {
            await batch.commit();
            console.log(`Seeding complete. Batch committed.`);
        }
        
        return { hasWritten: batchHasWrites };

    } catch (error) {
        console.error('Error in ensureSeedData:', error);
        // We don't throw here to avoid breaking the parent operation,
        // but the failure will be logged.
        return { hasWritten: false };
    }
}

/**
 * Retrieves a summary of all categories with the count of exams in each.
 * This function is intended to be called from the server and is highly efficient.
 * @returns An object with the list of categories or an error.
 */
export const getCategories = async () => {
  try {
    const examsRef = collection(db, 'exams');

    // Create an array of promises for each category count
    const countPromises = CATEGORY_DEFINITIONS.map(async (def) => {
      const q = query(examsRef, where('category', '==', def.id));
      const snapshot = await getCountFromServer(q);
      return {
        id: def.id,
        name: def.name,
        examCount: snapshot.data().count,
      };
    });

    // Resolve all promises in parallel
    const categories = await Promise.all(countPromises);
    
    return { success: true, categories };

  } catch (error) {
    console.error('Error in getCategories:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
};


export async function getTestResults(): Promise<TestResult[]> {
    const userId = 'placeholder-user-id'; // Use the same placeholder
    const resultsRef = collection(db, 'testResults');
    const q = query(resultsRef, where('userId', '==', userId), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => {
        const data = doc.data();
        const createdAt = data.createdAt;
        return {
            id: doc.id,
            ...data,
            createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt,
        } as TestResult
    });
}
