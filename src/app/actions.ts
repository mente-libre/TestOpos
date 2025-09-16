
'use server';

import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { generateReviewTest as generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { saveTestResult, type TestResult, type Question } from '@/lib/firebase/firestore';
import { ensureSeedData, getCategories, getTestResults, getQuestionsForCategory } from '@/lib/firebase/firestore-server';


export async function loadInitialData() {
  try {
    // Attempt to seed data first. This is idempotent.
    const { hasWritten } = await ensureSeedData();

    // If data was just written, we need to give Firestore a moment to be consistent.
    // This is a simple workaround for eventual consistency.
    if (hasWritten) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Fetch categories. Now it should be populated.
    const initialResult = await getCategories();
    
    if (initialResult.success) {
      return { success: true, categories: initialResult.categories };
    } else {
      // If it fails even after seeding, return an error.
      return { success: false, error: initialResult.error };
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
    try {
        await saveTestResult(result);
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
        const results = await getTestResults();
        return { success: true, stats: results };
    } catch (error) {
        console.error("Error loading statistics", error);
        return { success: false, error: "No se pudieron cargar las estadísticas." };
    }
}

    
