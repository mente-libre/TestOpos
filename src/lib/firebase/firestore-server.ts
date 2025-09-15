
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
} from 'firebase/firestore';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006 } from '../seed-data';
import { advoGeneralTest } from '../seed-data-new';
import { officeTest } from '../seed-data-office';
import { CATEGORY_DEFINITIONS } from './firestore';


/**
 * Ensures that the initial seed data (demo exams) exists in Firestore.
 * It checks if a specific seed exam exists, and if not, adds all seed data.
 * This function is intended to be called from the server.
 */
export const ensureSeedData = async (): Promise<void> => {
    try {
        const examsRef = collection(db, 'exams');
        const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest];
        
        // Let's check for each seed exam and add it if it's missing.
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

    } catch (error) {
        console.error('Error in ensureSeedData:', error);
        // We don't throw here to avoid breaking the parent operation,
        // but the failure will be logged.
    }
}

/**
 * Retrieves a summary of all categories with the count of exams in each.
 * This function is intended to be called from the server.
 * @returns An object with the list of categories or an error.
 */
export const getCategories = async () => {
  try {
    const examsRef = collection(db, 'exams');
    const querySnapshot = await getDocs(examsRef);
    const categoryCounts: Record<string, number> = {};

    querySnapshot.forEach(doc => {
      const exam = doc.data();
      if (exam.category) {
        categoryCounts[exam.category] = (categoryCounts[exam.category] || 0) + 1;
      }
    });

    const categories = CATEGORY_DEFINITIONS
      .map(def => ({
        id: def.id,
        name: def.name,
        examCount: categoryCounts[def.id] || 0,
      }))
      .filter(category => category.examCount > 0);

    return { success: true, categories };
  } catch (error) {
    console.error('Error in getCategories:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
};
