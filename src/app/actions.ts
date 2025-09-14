'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';

async function fetchPdfAsDataUri(url: string): Promise<string> {
    const response = await fetch(url, { redirect: 'follow' });
    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }
    const blob = await response.blob();
    
    // Check if the content type is HTML, which indicates it's not a direct PDF link
    if (blob.type.includes('text/html')) {
        throw new Error('La URL proporcionada no es un enlace de descarga directa de PDF. Por favor, usa un enlace que apunte directamente al archivo PDF.');
    }

    const buffer = await blob.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:${blob.type || 'application/pdf'};base64,${base64}`;
}

export async function getQuestionsFromPdf(pdfIdentifier: string, isUrl: boolean) {
  try {
    let pdfDataUri: string;

    if (isUrl) {
      if (!pdfIdentifier.startsWith('http')) {
        return { success: false, error: 'La URL introducida no es válida.' };
      }
      try {
        pdfDataUri = await fetchPdfAsDataUri(pdfIdentifier);
      } catch (fetchError: any) {
        console.error('Error fetching PDF from URL:', fetchError);
        // Pass the specific error message from fetchPdfAsDataUri
        return { success: false, error: fetchError.message || 'Error al descargar el PDF desde la URL.' };
      }
    } else {
      // It's a data URI from a file upload
      pdfDataUri = pdfIdentifier;
    }

    const result = await extractQuestionsFromPdf({ pdfDataUri });

    if (result && result.questions && result.questions.length > 0) {
      return { success: true, questions: result.questions };
    }
    
    // Provide a more specific error if no questions were found
    if (result && result.questions) {
        return { success: false, error: 'No se encontraron preguntas en el documento. La IA podría no haber podido leer el PDF, o el documento está en blanco.' };
    }
    
    return { success: false, error: 'La IA no pudo extraer preguntas del PDF. El formato podría ser incompatible.' };

  } catch (error) {
    console.error('Error extracting questions:', error);
    return { success: false, error: 'Error al procesar el PDF. Asegúrate de que el formato es correcto.' };
  }
}
