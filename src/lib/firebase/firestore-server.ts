
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
