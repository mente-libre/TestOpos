
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
import { type Exam, type Question, type TestResult, CATEGORY_DEFINITIONS } from '../definitions';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006 } from '@/lib/seed-data';
import { advoGeneralTest } from '@/lib/seed-data-new';
import { officeTest } from '@/lib/seed-data-office';

export * from '../definitions';


/**
 * Retrieves all exams for a specific category.
 * If no exams are found in Firestore, it falls back to local seed data.
 * @param categoryId The ID of the category.
 * @returns An object with the list of exams or an error.
 */
export const getExamsForCategory = async (categoryId: string) => {
  try {
    
    const examsRef = collection(db, 'exams');
    
    const q = query(
      examsRef,
      where('category', '==', categoryId)
    );
    const querySnapshot = await getDocs(q);

    const categoryName = CATEGORY_DEFINITIONS.find(c => c.id === categoryId)?.name || 'Categoría desconocida';

    let exams: Exam[] = [];

    if (!querySnapshot.empty) {
        exams = querySnapshot.docs.map(doc => {
            const data = doc.data();
            // Ensure all data is serializable using JSON stringify/parse
            const plainData = JSON.parse(JSON.stringify(data));
            return {
                id: doc.id,
                ...plainData,
            }
        }) as Exam[];
    } else {
        // Fallback to local seed data if Firestore is empty for this category
        console.warn(`No exams found in Firestore for category '${categoryId}'. Using local fallback data.`);
        const allSeedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest];
        const fallbackExams = allSeedExams
            .filter(exam => exam.category === categoryId)
            .map((seedExam, index) => ({
                id: `seed-${categoryId}-${index}`,
                userId: 'system',
                fileName: seedExam.fileName,
                category: seedExam.category,
                questions: seedExam.questions,
                createdAt: new Date().getTime(),
            }));
        exams = fallbackExams;
    }


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

    // Handle seed data case
    if (examId.startsWith('seed-')) {
        console.warn(`Loading exam '${examId}' from local seed data.`);
        const allSeedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest];
        const [, category, indexStr] = examId.split('-');
        const index = parseInt(indexStr, 10);
        
        const categoryExams = allSeedExams.filter(e => e.category === category);
        const seedExam = categoryExams[index];

        if (seedExam) {
            const exam: Exam = {
                id: examId,
                userId: 'system',
                fileName: seedExam.fileName,
                category: seedExam.category,
                questions: seedExam.questions,
                createdAt: new Date().getTime(),
            };
            return { success: true, exam };
        } else {
             return { success: false, error: 'No se encontró el examen de ejemplo.' };
        }
    }


    const examRef = doc(db, 'exams', examId);
    const docSnap = await getDoc(examRef);

    if (!docSnap.exists()) {
      return { success: false, error: 'No se encontró el examen.' };
    }

    const data = docSnap.data();
    
    // Convert the whole object to a plain JSON object to remove any non-serializable types
    const plainData = JSON.parse(JSON.stringify(data));

    const exam = { 
        id: docSnap.id, 
        ...plainData,
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


export async function saveExam(exam: Omit<Exam, 'id' | 'createdAt'>): Promise<{ success: boolean; error?: string }> {
  try {
    await addDoc(collection(db, 'exams'), {
      ...exam,
      createdAt: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving exam:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}

export async function saveTestResult(result: Omit<TestResult, 'id' | 'createdAt'>): Promise<{ success: boolean; error?: string }> {
  if (!result.userId) {
     return { success: false, error: "UserID is required to save results." };
  }
  try {
    await addDoc(collection(db, 'testResults'), {
      ...result,
      createdAt: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving test result:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}
