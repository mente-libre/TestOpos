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
      'The PDF document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
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
  prompt: `You are an expert at extracting questions from PDF documents.

  Given the following PDF document, extract all the questions and return them as a JSON array of strings.

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
