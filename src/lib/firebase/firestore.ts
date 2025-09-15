
'use client';

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
  limit,
  writeBatch,
  orderBy,
} from 'firebase/firestore';


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

// Type for a test result document
export interface TestResult {
  id: string;
  userId: string;
  testTitle: string;
  score: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;

  totalQuestions: number;
  createdAt: Timestamp | number;
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
 * Retrieves all exams grouped by category or all exams for a specific category.
 * If categoryId is null, it returns a summary of all categories.
 * If categoryId is provided, it returns all exams within that category.
 * @param categoryId The ID of the category, or null to get all category summaries.
 * @returns An object with the list of exams or categories, or an error.
 */
export const getExamsForCategory = async (categoryId: string | null) => {
  try {
    
    const examsRef = collection(db, 'exams');
    
    // Scenario 1: Get all categories summary
    if (categoryId === null) {
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
    }

    // Scenario 2: Get exams for a specific category
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
        createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt,
      }
    }) as Exam[];

    const categoryName = CATEGORY_DEFINITIONS.find(c => c.id === categoryId)?.name || 'Categoría desconocida';

    return { success: true, exams, categoryName };

  } catch (error) {
    console.error('Error in getExamsForCategory:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
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
      return { success: false, error: 'Exam ID is required.' };
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
        // Convert Timestamp to a plain number (milliseconds) for client-side use
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
