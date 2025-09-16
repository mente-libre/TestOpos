
'use server';

import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { generateReviewTest as generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { saveTestResult } from '@/lib/firebase/firestore';
import { type TestResult, type Question } from '@/lib/definitions';
import { getCategories, getTestResultsForUser, getQuestionsForCategory } from '@/lib/firebase/firestore-server';
import { getAuth } from 'firebase-admin/auth';
import { app as adminApp } from '@/lib/firebase/firebase-admin';
import { collection, doc, getCountFromServer, query, where, writeBatch, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006 } from '@/lib/seed-data';
import { advoGeneralTest } from '@/lib/seed-data-new';
import { officeTest } from '@/lib/seed-data-office';


/**
 * Ensures that the initial seed data (demo exams) exists in Firestore.
 * This function is intended to be called from a server action and is idempotent.
 * @returns An object indicating if a write operation was performed.
 */
async function ensureSeedData(): Promise<{ hasWritten: boolean }> {
    try {
        const examsRef = collection(db, 'exams');
        const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest];
        
        const batch = writeBatch(db);
        let batchHasWrites = false;

        for (const seedExam of seedExams) {
             const seedCheckQuery = query(examsRef, where("fileName", "==", seedExam.fileName));
             const snapshot = await getCountFromServer(seedCheckQuery);
             if (snapshot.data().count === 0) {
                console.log(`Seed exam "${seedExam.fileName}" not found. Adding to batch.`);
                const newExamRef = doc(examsRef);
                batch.set(newExamRef, {
                    ...seedExam,
                    userId: 'system',
                    createdAt: Timestamp.now(), // Use Firestore Timestamp
                });
                batchHasWrites = true;
             }
        }
       
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


async function getUserId(): Promise<string | null> {
    try {
        if (!adminApp) {
          console.log("Admin app not initialized, returning placeholder user.");
          return 'placeholder-user-id';
        }
        const auth = getAuth(adminApp);
        // This is a placeholder for getting the current user's session.
        // In a real app with session management, you'd get the token and verify it.
        // For this context, we can't get the real user, so we fall back to a placeholder,
        // but the code structure is now correct for a real implementation.
        // const sessionCookie = cookies().get('session')?.value || '';
        // const decodedToken = await auth.verifySessionCookie(sessionCookie, true);
        // return decodedToken.uid;
        return 'placeholder-user-id';
    } catch (error) {
        console.error("Auth error in server action:", error);
        return null;
    }
}


export async function loadInitialData() {
  try {
    // Attempt to seed data first. This is idempotent.
    await ensureSeedData();

    // Fetch categories. Now it should be populated.
    const result = await getCategories();
    
    if (result.success) {
      return { success: true, categories: result.categories };
    } else {
      // If it fails even after seeding, return an error.
      return { success: false, error: result.error };
    }

  } catch (error) {
    console.error('Error loading initial data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado en el servidor al cargar los datos.';
    return { success: false, error: errorMessage };
  }
}

export async function generateNewTest(category: string) {
  try {
     // Ensure seed data exists, just in case.
     await ensureSeedData();
     
     // Get actual questions from the selected category to provide context.
    const questionsResult = await getQuestionsForCategory(category);
    if (!questionsResult.success || questionsResult.questions.length === 0) {
      return {
        success: false,
        error: `No hay suficientes preguntas en la categoría "${category}" para generar un nuevo test. Por favor, elige otra categoría.`
      }
    }

    // Format the questions into a string context for the AI.
    const context = questionsResult.questions
      .map(q => `Pregunta: ${q.questionText}\nRespuesta Correcta: ${q.options[q.correctAnswerIndex]}`)
      .join('\n---\n');
      
    // Call the AI flow to generate new questions
    const generationResult = await generateTestFromExam({
      category,
      context: context
    });

    if (!generationResult?.questions || generationResult.questions.length === 0) {
      return { 
        success: false, 
        error: 'La IA no pudo generar nuevas preguntas con el contexto actual. Inténtalo de nuevo o con otra categoría.' 
      };
    }
    
    return { success: true, questions: generationResult.questions };

  } catch (error) {
    console.error('Error in generateNewTest:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado en el servidor al generar el nuevo test.';
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}

export async function generateReviewTest(failedQuestions: Question[]) {
  try {
    if (!failedQuestions || failedQuestions.length === 0) {
      return {
        success: false,
        error: 'No se proporcionaron preguntas para el repaso.'
      };
    }

    // Format the failed questions as context for the AI
    const context = failedQuestions
      .map(q => `Pregunta fallada: ${q.questionText}\nRespuesta correcta: ${q.options[q.correctAnswerIndex]}`)
      .join('\n---\n');

    // Call the new AI flow
    const generationResult = await generateReviewTestFlow({ context });

    if (!generationResult?.questions || generationResult.questions.length === 0) {
      return { 
        success: false, 
        error: 'La IA no pudo generar un test de repaso. Inténtalo de nuevo.' 
      };
    }
    
    return { success: true, questions: generationResult.questions };

  } catch (error) {
    console.error('Error in generateReviewTest:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado al generar el test de repaso.';
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}

export async function saveFinishedTest(result: Omit<TestResult, 'id' | 'createdAt'>) {
    const userId = await getUserId();
    if (!userId) {
        return { success: false, error: "El usuario no está autenticado." };
    }
    try {
        const resultWithUser = { ...result, userId };
        await saveTestResult(resultWithUser);
        return { success: true };
    } catch(error) {
        console.error("Error saving test results", error);
        // We don't want to bother the user with this, just log it.
        // The results page will still work, just this attempt won't be saved.
        return { success: false, error: "No se pudo guardar el resultado del test." };
    }
}

export async function loadStatistics() {
    try {
        const userId = await getUserId();
         if (!userId) {
            return { success: false, error: "Debes iniciar sesión para ver tus estadísticas." };
        }
        const results = await getTestResultsForUser(userId);
        return { success: true, stats: results };
    } catch (error) {
        console.error("Error loading statistics", error);
        return { success: false, error: "No se pudieron cargar las estadísticas." };
    }
}
