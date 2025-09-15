'use server';

import { db } from './config';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
  doc,
  getDoc,
  getCountFromServer,
  FirestoreError,
} from 'firebase/firestore';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest3 } from '../seed-data';


// Main type for an exam document
export interface Exam {
  id: string;
  userId: string;
  fileName: string;
  category: string;
  questions: Question[];
  createdAt: Timestamp | number; // Can be a Timestamp from Firestore or a number for client-side
}

// Type for a single question within an exam
export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

// Type for the summarized category data
export interface Category {
    id: string;
    name: string;
    examCount: number;
}

// Constant with category definitions
const CATEGORY_DEFINITIONS = [
    { id: "madrid", name: "Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];

/**
 * Ensures that the initial seed data (demo exams) exists in Firestore.
 * This is only called if the exams collection is empty.
 * @returns An object indicating success or failure.
 */
export const ensureSeedData = async () => {
    try {
        console.log('Seeding database with initial exams...');
        const examsRef = collection(db, 'exams');
        const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest3];

        for (const seedExam of seedExams) {
            await addDoc(examsRef, {
                ...seedExam,
                userId: 'system', // Mark as a system-generated exam
                createdAt: Timestamp.now(),
            });
        }
        console.log('Database seeded successfully.');
        return { success: true };
    } catch (error) {
        console.error('Error ensuring seed data:', error);
        return { success: false, error: 'Failed to seed database.' };
    }
}


/**
 * Retrieves all exams and groups them by category.
 * If no exams are found, it seeds the database and tries again.
 * This version is optimized to perform count queries instead of fetching all documents.
 * @returns An object with the list of summarized categories or an error.
 */
export const getAllExamsGroupedByCategory = async () => {
    try {
        const examsRef = collection(db, 'exams');
        
        // This query will fail with NOT_FOUND if the collection doesn't exist.
        const totalExamsSnapshot = await getCountFromServer(examsRef);
        const totalExams = totalExamsSnapshot.data().count;

        if (totalExams === 0) {
             // If there are no exams, seed the database and recall the function
            const seedResult = await ensureSeedData();
            if (seedResult.success) {
                return getAllExamsGroupedByCategory(); // Recursive call after seeding
            } else {
                return { success: false, error: seedResult.error || "Failed to initialize database." };
            }
        }

        const categories: Category[] = [];
        for (const def of CATEGORY_DEFINITIONS) {
            const q = query(examsRef, where('category', '==', def.id));
            const snapshot = await getCountFromServer(q);
            const count = snapshot.data().count;
            if (count > 0) {
                categories.push({
                    id: def.id,
                    name: def.name,
                    examCount: count,
                });
            }
        }
        
        return { success: true, categories };

    } catch (error) {
        // Specifically check for the NOT_FOUND error from Firestore
        if (error instanceof FirestoreError && error.code === 'not-found') {
            console.log('Exams collection not found. Seeding database...');
            const seedResult = await ensureSeedData();
            if (seedResult.success) {
                return getAllExamsGroupedByCategory(); // Recursive call after seeding
            } else {
                return { success: false, error: seedResult.error || "Failed to initialize database." };
            }
        }

        console.error('Error getting all exams:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}


/**
 * Retrieves all exams belonging to a specific category.
 * This function now fetches all exams in a category, regardless of user.
 * @param categoryId The ID of the category.
 * @returns An object with the list of exams or an error.
 */
export const getExamsForCategory = async (categoryId: string) => {
  try {
    if (!categoryId) {
      throw new Error('Category ID is required.');
    }

    const examsRef = collection(db, 'exams');
    const q = query(
      examsRef,
      where('category', '==', categoryId)
    );
    const querySnapshot = await getDocs(q);

    const exams = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const createdAt = data.createdAt;
      return {
        id: doc.id,
        ...data,
        // Convert Timestamp to a plain number (milliseconds)
        createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt,
      }
    }) as Exam[];

    const categoryName = CATEGORY_DEFINITIONS.find(c => c.id === categoryId)?.name || 'Categoría desconocida';

    return { success: true, exams, categoryName };
  } catch (error) {
    console.error('Error getting exams for category:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred while fetching exams for the category.';
    return { success: false, error: errorMessage };
  }
};


/**
 * Retrieves a single exam by its ID.
 * @param examId The ID of the exam to retrieve.
 * @returns An object with the exam data or an error.
 */
export const getExamById = async (examId: string) => {
  try {
    if (!examId) {
      throw new Error('Exam ID is required.');
    }

    const examRef = doc(db, 'exams', examId);
    const docSnap = await getDoc(examRef);

    if (!docSnap.exists()) {
      return { success: false, error: 'No se encontró el examen.' };
    }

    const data = docSnap.data();
    const createdAt = data.createdAt;

    const exam = { 
        id: docSnap.id, 
        ...data,
        // Convert Timestamp to a plain number (milliseconds)
        createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt
    } as Exam;
    
    return { success: true, exam };
  } catch (error) {
    console.error('Error getting exam by ID:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred while fetching the exam.';
    return { success: false, error: errorMessage };
  }
};

/**
 * Saves a new exam document to Firestore for a specific user.
 * @param userId The ID of the user who owns the exam.
 * @param examData The data for the exam, excluding id and userId.
 * @returns An object indicating success or failure.
 */
export const saveExam = async (
  userId: string,
  examData: Omit<Exam, 'id' | 'userId' | 'createdAt'>
) => {
  try {
    if (!userId) {
      throw new Error('User ID is required to save an exam.');
    }
    
    await addDoc(collection(db, 'exams'), {
      ...examData,
      userId,
      createdAt: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving exam to Firestore:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred while saving the exam.';
    return { success: false, error: errorMessage };
  }
};

    