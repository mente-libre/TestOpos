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
import { madridAdminTest, estadoConstitutionTest } from '../seed-data';

// Main type for an exam document
export interface Exam {
  id: string;
  userId: string;
  fileName: string;
  category: string;
  questions: Question[];
  createdAt: Timestamp;
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
 * Retrieves all exams for a user and groups them by category.
 * @param userId The ID of the user.
 * @returns An object with the list of summarized categories or an error.
 */
export const getExamsForUser = async (userId: string) => {
    try {
        if (!userId) {
            throw new Error('User ID is required to fetch exams.');
        }

        const examsRef = collection(db, 'exams');
        const q = query(examsRef, where('userId', '==', userId));
        const querySnapshot = await getDocs(q);

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
        console.error('Error getting exams for user:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}

/**
 * Seeds initial demo data for a user if it doesn't exist.
 * @param userId The ID of the user.
 */
export const seedInitialDataForUser = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error('User ID is required to seed data.');
    }
    
    // Seed Madrid Test
    await seedExamIfNotExists(userId, madridAdminTest);

    // Seed Estado Constitution Test
    await seedExamIfNotExists(userId, estadoConstitutionTest);

    return { success: true };

  } catch (error) {
      console.error(`Error seeding initial data for user ${userId}:`, error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during data seeding.';
      return { success: false, error: errorMessage };
  }
};

/**
 * Helper function to seed a single exam if it doesn't exist for the user in that category.
 * @param userId The ID of the user.
 * @param examToSeed The exam data to potentially seed.
 */
const seedExamIfNotExists = async (userId: string, examToSeed: Omit<Exam, 'id' | 'userId' | 'createdAt'>) => {
  const examsRef = collection(db, 'exams');
  const q = query(examsRef, where('userId', '==', userId), where('category', '==', examToSeed.category), where('fileName', '==', examToSeed.fileName));
  const snapshot = await getCountFromServer(q);

  if (snapshot.data().count === 0) {
    console.log(`No exam named "${examToSeed.fileName}" found for user ${userId}. Seeding...`);
    await saveExam(userId, {
      fileName: examToSeed.fileName,
      category: examToSeed.category,
      questions: examToSeed.questions,
    });
    console.log(`Successfully seeded exam "${examToSeed.fileName}" for user ${userId}.`);
  } else {
    console.log(`User ${userId} already has exam "${examToSeed.fileName}". Skipping seed.`);
  }
}


/**
 * Retrieves all exams belonging to a specific category for a user.
 * @param userId The ID of the user.
 * @param categoryId The ID of the category.
 * @returns An object with the list of exams or an error.
 */
export const getExamsForCategory = async (userId: string, categoryId: string) => {
  try {
    if (!userId || !categoryId) {
      throw new Error('User ID and Category ID are required.');
    }

    const examsRef = collection(db, 'exams');
    const q = query(
      examsRef,
      where('userId', '==', userId),
      where('category', '==', categoryId)
    );
    const querySnapshot = await getDocs(q);

    const exams = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Exam[];

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

    const exam = { id: docSnap.id, ...docSnap.data() } as Exam;
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
