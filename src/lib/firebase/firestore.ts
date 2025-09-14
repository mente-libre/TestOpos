

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
} from 'firebase/firestore';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2 } from '../seed-data';


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
 * If a demo exam doesn't exist, it will be created.
 * @returns An object indicating success or failure.
 */
export const ensureSeedData = async () => {
    try {
        const examsRef = collection(db, 'exams');
        const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2];
        let dataWasSeeded = false;

        for (const seedExam of seedExams) {
            // Check if an exam with the same fileName already exists
            const q = query(examsRef, where("fileName", "==", seedExam.fileName));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                // If it doesn't exist, add it
                await addDoc(examsRef, {
                    ...seedExam,
                    userId: 'system', // Mark as a system-generated exam
                    createdAt: Timestamp.now(),
                });
                dataWasSeeded = true;
            }
        }
        return { success: true, dataWasSeeded };
    } catch (error) {
        console.error('Error ensuring seed data:', error);
        return { success: false, error: 'Failed to seed database.' };
    }
}


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

/**
 * Retrieves all exams and groups them by category.
 * @returns An object with the list of summarized categories or an error.
 */
export const getAllExamsGroupedByCategory = async () => {
    try {
        const examsRef = collection(db, 'exams');
        const querySnapshot = await getDocs(examsRef);

        const categoryMap: { [key: string]: number } = {};

        querySnapshot.forEach(doc => {
            const exam = doc.data() as Omit<Exam, 'id'>;
            if (exam.category) {
                if (categoryMap[exam.category]) {
                    categoryMap[exam.category]++;
                } else {
                    categoryMap[exam.category] = 1;
                }
            }
        });

        const categories: Category[] = CATEGORY_DEFINITIONS.map(def => ({
            id: def.id,
            name: def.name,
            examCount: categoryMap[def.id] || 0,
        })).filter(c => c.examCount > 0);
        
        return { success: true, categories };

    } catch (error) {
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
