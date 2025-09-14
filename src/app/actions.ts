'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';

export async function getQuestionsFromPdf(pdfIdentifier: string, isUrl: boolean) {
  // For now, we only support file uploads (data URI), so isUrl is ignored.
  // The logic for fetching from a URL can be re-added later if needed.
  try {
    const pdfDataUri = pdfIdentifier;

    // Call the AI flow to extract questions
    const result = await extractQuestionsFromPdf({ pdfDataUri });

    if (result && result.questions && result.questions.length > 0) {
      // Success case: we found questions.
      return { success: true, questions: result.questions };
    } 
    
    if (result && result.questions) {
      // AI ran successfully but found no questions.
      return { success: false, error: 'No se encontraron preguntas en el documento. La IA podría no haber podido leer el PDF, o el documento no contiene preguntas válidas con 4 opciones.' };
    }
    
    // The AI flow failed or returned an unexpected structure.
    return { success: false, error: 'La IA no pudo extraer preguntas del PDF. El formato podría ser incompatible o el archivo estar corrupto.' };

  } catch (error) {
    console.error('Error in getQuestionsFromPdf:', error);
    // Catch any other unexpected errors during the process.
    return { success: false, error: 'Ocurrió un error inesperado en el servidor al procesar el PDF.' };
  }
}
