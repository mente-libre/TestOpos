'use server';

import { getFirestore } from '@/lib/firebase/firebase-admin';
import { generateMixedTestFlow } from '@/ai/flows/generate-mixed-test-flow';
import { generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { MixedTestParams, ReviewTestParams, ExamSchema } from '@/core/types';
import { Category } from '@/lib/definitions';
import { ZodError } from 'zod';

// Helper to format errors consistently
function handleError(error: unknown, context: string) {
  console.error(`Error in ${context}:`, error);
  if (error instanceof ZodError) {
    return { success: false, error: `Error de validación en ${context}: ${error.errors.map(e => e.message).join(', ')}` };
  } 
  if (error instanceof Error) {
    return { success: false, error: `Error en ${context}: ${error.message}` };
  }
  return { success: false, error: `Ocurrió un error desconocido en ${context}.` };
}

export async function loadInitialData() {
  try {
    const firestore = await getFirestore();
    const categoriesSnapshot = await firestore.collection('categories').get();
    const categories = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Category[];

    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const examsSnapshot = await firestore
          .collection('exams')
          .where('category', '==', category.id)
          .count()
          .get();
        return {
          ...category,
          examCount: examsSnapshot.data().count,
        };
      })
    );
    return { success: true, categories: categoriesWithCounts };
  } catch (error) {
    return handleError(error, 'loadInitialData');
  }
}

export async function getExamsForCategory(categoryId: string) {
  try {
    const firestore = await getFirestore();
    
    // Fetch category details from Firestore
    const categoryDoc = await firestore.collection('categories').doc(categoryId).get();
    if (!categoryDoc.exists) {
      return { success: false, error: `La categoría con id '${categoryId}' no fue encontrada.` };
    }
    const categoryName = categoryDoc.data()?.name;

    // Fetch exams for the category
    const examsSnapshot = await firestore
      .collection('exams')
      .where('category', '==', categoryId)
      .get();

    const exams = examsSnapshot.docs.map(doc => {
      const data = { id: doc.id, ...doc.data() };
      const parsed = ExamSchema.parse(data);
      return { ...parsed, name: (data as any).fileName, createdAt: (data as any).createdAt ?? null };
    });

    return { success: true, exams, categoryName };
  } catch (error) {
    return handleError(error, `getExamsForCategory (id: ${categoryId})`);
  }
}

export async function getExamById(examId: string) {
  try {
    const firestore = await getFirestore();
    const examDoc = await firestore.collection('exams').doc(examId).get();
    if (!examDoc.exists) {
      return { success: false, error: `El examen con id '${examId}' no fue encontrado.` };
    }
    const data = { id: examDoc.id, ...examDoc.data() };
    const parsed = ExamSchema.parse(data);
    const exam = { ...parsed, name: (data as any).fileName, category: (data as any).category, createdAt: (data as any).createdAt ?? null };
    return { success: true, exam };
  } catch (error) {
    return handleError(error, `getExamById (id: ${examId})`);
  }
}

export async function generateNewMixedTest(params: MixedTestParams) {
  try {
    const result = await generateMixedTestFlow(params);
    return { success: true, test: result };
  } catch (error) {
    return handleError(error, 'generateNewMixedTest');
  }
}

export async function generateReviewTest(params: ReviewTestParams) {
  try {
    const result = await generateReviewTestFlow(params);
    return { success: true, test: result };
  } catch (error) {
    return handleError(error, 'generateReviewTest');
  }
}
