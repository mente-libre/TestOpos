'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';
import { saveExam, type Exam } from '@/lib/firebase/firestore';
import type { User } from '@/lib/firebase/auth';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export async function processAndSaveExam(
  pdfDataUri: string,
  fileName: string,
  category: string,
  user: User
) {
  try {
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
    
    const saveResult = await saveExam(user, examData);

    if (!saveResult.success) {
      return { success: false, error: saveResult.error };
    }

    // 3. Return success with extracted questions
    return { success: true, questions: extractionResult.questions };

  } catch (error) {
    console.error('Error in processAndSaveExam:', error);
    return { 
      success: false, 
      error: 'Ocurrió un error inesperado en el servidor al procesar y guardar el examen.' 
    };
  }
}
