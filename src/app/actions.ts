'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';

async function fetchPdfAsDataUri(url: string): Promise<string> {
    const response = await fetch(url, { redirect: 'follow' });
    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }
    const blob = await response.blob();
    
    // Most PDF viewers like Adobe's will return text/html for the initial response.
    // If we get HTML, it's not a direct download link.
    if (blob.type.includes('text/html')) {
        throw new Error('La URL proporcionada no es un enlace de descarga directa de PDF. Por favor, usa un enlace que apunte directamente al archivo PDF.');
    }

    const buffer = await blob.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:${blob.type || 'application/pdf'};base64,${base64}`;
}


export async function getQuestionsFromPdf(pdfIdentifier: string) {
  try {
    let pdfDataUri: string;

    if (pdfIdentifier.startsWith('http')) {
        try {
            pdfDataUri = await fetchPdfAsDataUri(pdfIdentifier);
        } catch (fetchError: any) {
            console.error('Error fetching PDF from URL:', fetchError);
            return { success: false, error: fetchError.message };
        }
    } else {
        pdfDataUri = pdfIdentifier;
    }

    const result = await extractQuestionsFromPdf({ pdfDataUri });
    if (result && result.questions) {
      if (result.questions.length === 0) {
        return { success: false, error: 'No se encontraron preguntas en el documento. La IA podría no haber podido leer el PDF.' };
      }
      return { success: true, questions: result.questions };
    }
    return { success: false, error: 'La IA no pudo extraer preguntas del PDF.' };
  } catch (error) {
    console.error('Error extracting questions:', error);
    return { success: false, error: 'Error al procesar el PDF. Asegúrate de que el formato es correcto y el enlace funciona.' };
  }
}
