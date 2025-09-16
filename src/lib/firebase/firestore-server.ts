

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
import { type TestResult, type Question, type Exam, type Category, CATEGORY_DEFINITIONS } from '../definitions';


/**
 * Retrieves a summary of all categories with the count of exams in each.
 * If the database is empty, it seeds the initial data first.
 * This function is intended to be called from the server and is highly efficient.
 * @returns An object with the list of categories or an error.
 */
export const getCategories = async () => {
  try {
    const examsRef = collection(db, 'exams');
    let querySnapshot = await getDocs(examsRef);
    
    // If the database is empty, seed it with initial data.
    if (querySnapshot.empty) {
        console.log('No exams found. Seeding initial data...');
        const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest];
        const batch = writeBatch(db);
        
        seedExams.forEach(seedExam => {
            const newExamRef = doc(examsRef);
            batch.set(newExamRef, {
                ...seedExam,
                userId: 'system',
                createdAt: Timestamp.now(),
            });
        });
        
        await batch.commit();
        console.log('Seeding complete. Refetching data...');
        // Refetch the data after seeding
        querySnapshot = await getDocs(examsRef);
    }

    const categoryCounts: { [key: string]: number } = {};
    querySnapshot.docs.forEach(doc => {
        const exam = doc.data() as Exam;
        if (exam.category) {
            categoryCounts[exam.category] = (categoryCounts[exam.category] || 0) + 1;
        }
    });

    const categories: Category[] = CATEGORY_DEFINITIONS.map(def => ({
      ...def,
      examCount: categoryCounts[def.id] || 0,
    }));
    
    return { success: true, categories };

  } catch (error) {
    console.error('Error in getCategories:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
};


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

        // Use Promise.all to run all existence checks in parallel for efficiency
        await Promise.all(seedExams.map(async (seedExam) => {
             const seedCheckQuery = query(examsRef, where("fileName", "==", seedExam.fileName), limit(1));
             const snapshot = await getCountFromServer(seedCheckQuery);
             if (snapshot.data().count === 0) {
                console.log(`Seed exam "${seedExam.fileName}" not found. Adding to batch.`);
                const newExamRef = doc(examsRef);
                batch.set(newExamRef, {
                    ...seedExam,
                    userId: 'system',
                    createdAt: Timestamp.now(),
                });
                batchHasWrites = true;
             }
        }));
       
        if (batchHasWrites) {
            await batch.commit();
            console.log(`Seeding complete. Batch committed.`);
        }
        
        return { hasWritten: batchHasWrites };

    } catch (error) {
        console.error('Error in ensureSeedData:', error);
        return { hasWritten: false };
    }
}


/**
 * Retrieves up to 100 questions for a given category to be used as context.
 * @param categoryId The ID of the category.
 * @returns An object with the list of questions or an error.
 */
export const getQuestionsForCategory = async (categoryId: string): Promise<{ success: boolean, questions: Question[], error?: string }> => {
  try {
    const examsRef = collection(db, 'exams');
    const q = query(
      examsRef,
      where('category', '==', categoryId),
      limit(10) // Limit to 10 exams to avoid fetching too much data
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: true, questions: [] };
    }

    // Flatten all questions from all exams found, up to a limit of 100
    const allQuestions = querySnapshot.docs
      .flatMap(doc => doc.data().questions as Question[])
      .slice(0, 100);

    return { success: true, questions: allQuestions };

  } catch (error) {
    console.error(`Error fetching questions for category ${categoryId}:`, error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error.';
    return { success: false, questions: [], error: errorMessage };
  }
}


export async function getTestResultsForUser(userId: string): Promise<TestResult[]> {
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
