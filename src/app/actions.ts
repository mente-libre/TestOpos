
'use server';

import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { saveExam, type Exam, getExamsForCategory, ensureSeedData } from '@/lib/firebase/firestore';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}


export async function loadInitialData() {
  try {
    // Attempt to get categories first
    let initialResult = await getExamsForCategory(null);

    // If no categories exist (which implies no exams), seed the data and refetch
    if (initialResult.success && initialResult.categories && initialResult.categories.length === 0) {
      await ensureSeedData();
      // Refetch after seeding
      initialResult = await getExamsForCategory(null);
    }
    
    return initialResult;

  } catch (error) {
    console.error('Error loading initial data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado en el servidor al cargar los datos.';
    return { success: false, error: errorMessage };
  }
}

export async function generateNewTest(category: string, topic: string) {
  try {
     // 1. Get existing exams from the selected category to use as context
    const existingExamsResult = await getExamsForCategory(category);
    if (!existingExamsResult.success || !existingExamsResult.exams || existingExamsResult.exams.length === 0) {
      // Before failing, ensure seed data exists, as this might be the first run.
      await ensureSeedData();
      const secondAttemptResult = await getExamsForCategory(category);
      if (!secondAttemptResult.success || !secondAttemptResult.exams || secondAttemptResult.exams.length === 0) {
        return {
          success: false,
          error: 'No hay exámenes en esta categoría para usar como base para la generación. Prueba con otra categoría o espera a que se carguen los datos iniciales.'
        };
      }
      return generateNewTest(category, topic); // Retry with seeded data
    }

    // 2. Format the existing questions as context for the AI
    const contextQuestions = existingExamsResult.exams
      .flatMap(exam => exam.questions)
      .map(q => `Pregunta: ${q.questionText}\nRespuesta Correcta: ${q.options[q.correctAnswerIndex]}`)
      .join('\n\n');
      
    // 3. Call the AI flow to generate new questions
    const generationResult = await generateTestFromExam({
      topic,
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
