'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';

// This function is not currently used for file uploads but is kept for future URL processing.
async function fetchPdfAsDataUri(url: string): Promise<string> {
    const response = await fetch(url, { redirect: 'follow' });
    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }
    const blob = await response.blob();
    
    if (blob.type.includes('text/html')) {
        throw new Error('La URL proporcionada no es un enlace de descarga directa de PDF.');
    }

    const buffer = await blob.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:${blob.type || 'application/pdf'};base64,${base64}`;
}

export async function getQuestionsFromPdf(pdfIdentifier: string, isUrl: boolean) {
  try {
    let pdfDataUri: string;

    if (isUrl) {
      // This block handles PDF processing from a URL.
      if (!pdfIdentifier.startsWith('http')) {
        return { success: false, error: 'La URL introducida no es válida.' };
      }
      try {
        pdfDataUri = await fetchPdfAsDataUri(pdfIdentifier);
      } catch (fetchError: any) {
        console.error('Error fetching PDF from URL:', fetchError);
        return { success: false, error: fetchError.message || 'Error al descargar el PDF desde la URL.' };
      }
    } else {
      // This block handles PDF processing from a file upload (data URI).
      pdfDataUri = pdfIdentifier;
    }

    // Call the AI flow to extract questions
    const result = await extractQuestionsFromPdf({ pdfDataUri });

    if (result && result.questions && result.questions.length > 0) {
      return { success: true, questions: result.questions };
    }
    
    // Handle the case where the AI runs successfully but finds no questions.
    if (result && result.questions) {
        return { success: false, error: 'No se encontraron preguntas en el documento. La IA podría no haber podido leer el PDF, o el documento no contiene preguntas.' };
    }
    
    // Handle other AI-related failures.
    return { success: false, error: 'La IA no pudo extraer preguntas del PDF. El formato podría ser incompatible o el archivo estar corrupto.' };

  } catch (error) {
    console.error('Error in getQuestionsFromPdf:', error);
    // Provide a generic but informative error for unexpected issues.
    return { success: false, error: 'Ocurrió un error inesperado en el servidor al procesar el PDF.' };
  }
}
