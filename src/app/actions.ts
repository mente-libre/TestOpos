
'use server';

import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { generateReviewTest as generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { saveTestResult } from '@/lib/firebase/firestore';
import { type TestResult, type Question } from '@/lib/definitions';
import { getCategories, getTestResultsForUser, getQuestionsForCategory } from '@/lib/firebase/firestore-server';
import { getAuth } from 'firebase-admin/auth';
import { app as adminApp } from '@/lib/firebase/firebase-admin';


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
    // This function now ONLY reads data. The seeding is handled client-side.
    const result = await getCategories();
    
    if (result.success) {
      return { success: true, categories: result.categories };
    } else {
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
