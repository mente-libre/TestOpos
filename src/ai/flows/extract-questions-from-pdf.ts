'use server';

/**
 * @fileOverview Extracts questions from a PDF document using AI.
 *
 * - extractQuestionsFromPdf - A function that extracts questions from a PDF.
 * - ExtractQuestionsFromPdfInput - The input type for the extractQuestionsFromPdf function.
 * - ExtractQuestionsFromPdfOutput - The return type for the extractQuestionsFromPdf function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractQuestionsFromPdfInputSchema = z.object({
  pdfDataUri: z
    .string()
    .describe(
      "The PDF document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractQuestionsFromPdfInput = z.infer<
  typeof ExtractQuestionsFromPdfInputSchema
>;

const ExtractQuestionsFromPdfOutputSchema = z.object({
  questions: z
    .array(z.string())
    .describe('The extracted questions from the PDF.'),
});
export type ExtractQuestionsFromPdfOutput = z.infer<
  typeof ExtractQuestionsFromPdfOutputSchema
>;

export async function extractQuestionsFromPdf(
  input: ExtractQuestionsFromPdfInput
): Promise<ExtractQuestionsFromPdfOutput> {
  return extractQuestionsFromPdfFlow(input);
}

const extractQuestionsFromPdfPrompt = ai.definePrompt({
  name: 'extractQuestionsFromPdfPrompt',
  input: {schema: ExtractQuestionsFromPdfInputSchema},
  output: {schema: ExtractQuestionsFromPdfOutputSchema},
  prompt: `You are an expert at extracting questions from PDF documents for civil service exams.

  Your task is to meticulously analyze the following PDF document and extract only the questions.

  Follow these instructions carefully:
  1.  **Identify Questions**: Look for numbered lists, paragraphs ending in a question mark, or phrases that are clearly formatted as test questions.
  2.  **Ignore Non-Question Content**: Do not include headers, footers, page numbers, introductory text, or answer choices. Focus solely on the text of the question itself.
  3.  **Clean the Output**: Ensure that each extracted question is a clean, single string. Do not include the question number (e.g., "1.", "2).") in the final string.

  Return the questions in the format specified by the output schema. If no questions are found, return an empty array.

  PDF Document: {{media url=pdfDataUri}}`,
});

const extractQuestionsFromPdfFlow = ai.defineFlow(
  {
    name: 'extractQuestionsFromPdfFlow',
    inputSchema: ExtractQuestionsFromPdfInputSchema,
    outputSchema: ExtractQuestionsFromPdfOutputSchema,
  },
  async input => {
    const {output} = await extractQuestionsFromPdfPrompt(input);
    return output!;
  }
);
