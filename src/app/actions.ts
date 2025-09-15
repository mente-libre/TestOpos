
'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';
import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { saveExam, type Exam, getExamsForCategory, ensureSeedData } from '@/lib/firebase/firestore';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export async function processAndSaveExam(
  pdfDataUri: string,
  fileName: string,
  category: string,
  userId: string
) {
  try {
    // Note: In a real app, you'd get the user from the server-side session here
    // For now, we trust the userId passed from the client.
    if (!userId) {
      return {
        success: false,
        error: 'Usuario no autenticado.'
      };
    }
    
    // Ensure seed data exists. This is a safe place to run it, as it only seeds
    // if the data is missing and it's triggered by a user action.
    await ensureSeedData();
    
    // 1. Extract questions from PDF using AI
    const extractionResult = await extractQuestionsFromPdf({ pdfDataUri });

    if (!extractionResult?.questions || extractionResult.questions.length === 0) {
      return { 
        success: false, 
        error: 'No se encontraron preguntas válidas en el documento. Asegúrate de que el PDF contiene preguntas con 4 opciones.' 
      };
    }

    // 2. Save the extracted exam to Firestore
    const examData: Omit<Exam, 'id' | 'userId' | 'createdAt'> = {
      fileName,
      category,
      questions: extractionResult.questions,
    };
    
    const saveResult = await saveExam(userId, examData);

    if (!saveResult.success) {
      return { success: false, error: saveResult.error };
    }

    // 3. Return success with extracted questions
    return { success: true, questions: extractionResult.questions };

  } catch (error) {
    console.error('Error in processAndSaveExam:', error);
    // Cast error to get message, but check if it exists
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado en el servidor al procesar el examen.';
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}


export async function generateNewTest(category: string, topic: string) {
  try {
    // 1. Get existing exams from the selected category to use as context
    const existingExamsResult = await getExamsForCategory(category);
    if (!existingExamsResult.success || !existingExamsResult.exams || existingExamsResult.exams.length === 0) {
      return {
        success: false,
        error: 'No hay exámenes en esta categoría para usar como base para la generación.'
      };
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
