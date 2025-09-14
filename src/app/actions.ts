'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';
import { saveExam, type Exam } from '@/lib/firebase/firestore';

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
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado en el servidor al procesar y guardar el examen.';
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}
