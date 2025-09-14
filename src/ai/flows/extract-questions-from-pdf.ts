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
    .describe('An array of questions extracted from the document. The questions should not include the question number or any answer choices.'),
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
  prompt: `You are an expert at processing PDF documents for civil service exams.
  Your task is to extract only the questions from the provided PDF.
  - Ignore headers, footers, page numbers, and any introductory text.
  - Extract only the question text. Do not include the question number (e.g., "1.", "2)") or any multiple-choice answers.
  - Return the questions as an array of strings. If no questions are found, return an empty array.

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
