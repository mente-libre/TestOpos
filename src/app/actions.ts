'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';

export async function getQuestionsFromPdf(pdfDataUri: string) {
  try {
    const result = await extractQuestionsFromPdf({ pdfDataUri });
    if (result && result.questions) {
      if (result.questions.length === 0) {
        return { success: false, error: 'No se encontraron preguntas en el documento.' };
      }
      return { success: true, questions: result.questions };
    }
    return { success: false, error: 'La IA no pudo extraer preguntas del PDF.' };
  } catch (error) {
    console.error('Error extracting questions:', error);
    return { success: false, error: 'Error al procesar el PDF. Asegúrate de que el formato es correcto.' };
  }
}
