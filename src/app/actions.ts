
'use server';

import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { generateReviewTest as generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { saveExam, type Exam, getExamsForCategory, ensureSeedData, type Question, saveTestResult, getTestResults, type TestResult } from '@/lib/firebase/firestore';


export async function loadInitialData() {
  try {
    // Attempt to seed data first. This is idempotent.
    await ensureSeedData();

    // Fetch categories. Now it should be populated.
    const initialResult = await getExamsForCategory(null);
    
    if (initialResult.success) {
      return initialResult;
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
     
     // 1. Get existing exams from the selected category to use as context
    const existingExamsResult = await getExamsForCategory(category);

    if (!existingExamsResult.success || !existingExamsResult.exams || existingExamsResult.exams.length === 0) {
      return {
        success: false,
        error: 'No hay exámenes en esta categoría para usar como base para la generación. Prueba con otra categoría o espera a que se carguen los datos iniciales.'
      };
    }

    // 2. Format the existing questions as context for the AI
    const contextQuestions = existingExamsResult.exams
      .flatMap(exam => exam.questions)
      .map(q => `Pregunta: ${q.questionText}\nRespuesta Correcta: ${q.options[q.correctAnswerIndex]}`)
      .join('\n\n');
      
    // 3. Call the AI flow to generate new questions
    const generationResult = await generateTestFromExam({
      category,
      context: contextQuestions
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

export async function saveFinishedTest(result: Omit<TestResult, 'id' | 'createdAt' | 'userId'>) {
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
