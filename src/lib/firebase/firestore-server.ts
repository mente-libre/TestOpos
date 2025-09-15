
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


/**
 * Ensures that the initial seed data (demo exams) exists in Firestore.
 * It checks if a specific seed exam exists, and if not, adds all seed data.
 * This function is intended to be called from the server.
 */
export const ensureSeedData = async (): Promise<void> => {
    try {
        const examsRef = collection(db, 'exams');
        // Check if our main seed document already exists to avoid re-seeding
        const seedCheckQuery = query(examsRef, where("fileName", "==", madridAdminTest.fileName), limit(1));
        const seedCheckSnapshot = await getDocs(seedCheckQuery);

        if (seedCheckSnapshot.empty) {
            console.log('Seed data not found. Seeding initial exams...');
            const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest];
            const batch = writeBatch(db);

            seedExams.forEach(seedExam => {
                const newExamRef = doc(examsRef);
                batch.set(newExamRef, {
                    ...seedExam,
                    userId: 'system', // Indicates a system-generated exam
                    createdAt: Timestamp.now(),
                });
            });

            await batch.commit();
            console.log(`Seeding complete. Added ${seedExams.length} new exams.`);
        } else {
             // Check if the NEW exam exists
            const newExamCheckQuery = query(examsRef, where("fileName", "==", advoGeneralTest.fileName), limit(1));
            const newExamCheckSnapshot = await getDocs(newExamCheckQuery);

            if (newExamCheckSnapshot.empty) {
                console.log('Adding new ADVO General exam...');
                const batch = writeBatch(db);
                const newExamRef = doc(examsRef);
                batch.set(newExamRef, {
                    ...advoGeneralTest,
                    userId: 'system',
                    createdAt: Timestamp.now(),
                });
                await batch.commit();
                console.log('New ADVO General exam added.');
            }
        }
    } catch (error) {
        console.error('Error in ensureSeedData:', error);
        // We don't throw here to avoid breaking the parent operation,
        // but the failure will be logged.
    }
}
