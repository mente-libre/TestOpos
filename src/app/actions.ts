'use server';

import { extractQuestionsFromPdf } from '@/ai/flows/extract-questions-from-pdf';

async function fetchPdfAsDataUri(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }
    const blob = await response.blob();
    // Adobe URLs often return text/html first, so we can't be too strict.
    // We will let Genkit decide if it's a valid PDF.
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
            return { success: false, error: `No se pudo descargar el PDF de la URL. Asegúrate de que sea un enlace de descarga directa. Error: ${fetchError.message}` };
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
