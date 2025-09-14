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

const QuestionSchema = z.object({
  questionText: z.string().describe('The full text of the question.'),
  options: z
    .array(z.string())
    .length(4)
    .describe('An array of 4 possible answer strings.'),
  correctAnswerIndex: z
    .number()
    .min(0)
    .max(3)
    .describe('The index (0-3) of the correct answer in the options array.'),
});

const ExtractQuestionsFromPdfOutputSchema = z.object({
  questions: z
    .array(QuestionSchema)
    .describe(
      'An array of question objects extracted from the document.'
    ),
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
  Your task is to extract the questions, their multiple-choice options, and identify the correct answer.

  For each question you find, provide:
  - The question text.
  - An array of exactly 4 answer options.
  - The index (0, 1, 2, or 3) of the correct answer.

  Rules:
  - Ignore headers, footers, page numbers, and any introductory text.
  - Extract only the question text, without the question number (e.g., "1.", "2)").
  - Only include questions that have exactly 4 multiple-choice options. If a question has more or fewer than 4 options, skip it.
  - Analyze the PDF to determine which of the options is the correct one. If the correct answer is marked with an asterisk, in bold, or indicated in a separate answer key section, use that information.
  - Return a JSON object with a "questions" array. If no valid questions are found, return an empty array.

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
