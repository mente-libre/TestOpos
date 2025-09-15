
'use server';

/**
 * @fileOverview Generates a review test based on questions the user answered incorrectly.
 *
 * - generateReviewTest - A function that generates a new test for review.
 * - GenerateReviewTestInput - The input type for the function.
 * - GenerateReviewTestOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReviewTestInputSchema = z.object({
  context: z.string().describe('A string containing the questions and correct answers that the user previously failed, to provide context for generating new review questions.'),
});
type GenerateReviewTestInput = z.infer<
  typeof GenerateReviewTestInputSchema
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
  explanation: z.string().optional().describe('An optional explanation for the correct answer.'),
});

const GenerateReviewTestOutputSchema = z.object({
  questions: z
    .array(QuestionSchema)
    .describe(
      'An array of 10 new question objects generated based on the topics of the failed questions.'
    ),
});
type GenerateReviewTestOutput = z.infer<
  typeof GenerateReviewTestOutputSchema
>;

export async function generateReviewTest(
  input: GenerateReviewTestInput
): Promise<GenerateReviewTestOutput> {
  return generateReviewTestFlow(input);
}

const generateReviewTestPrompt = ai.definePrompt({
  name: 'generateReviewTestPrompt',
  input: {schema: GenerateReviewTestInputSchema},
  output: {schema: GenerateReviewTestOutputSchema},
  prompt: `Eres un tutor experto que ayuda a estudiantes a preparar oposiciones en España. Tu tarea es crear un test de repaso de 10 preguntas para ayudar a un usuario a reforzar los temas que ha fallado.

El usuario ha fallado las siguientes preguntas:
---
{{{context}}}
---

Basándote en los **temas** de esas preguntas falladas, genera 10 preguntas **completamente nuevas y originales** que pongan a prueba el conocimiento del usuario sobre esos mismos conceptos. No repitas las preguntas originales.

Asegúrate de que cada pregunta nueva tenga 4 opciones y una respuesta correcta claramente identificada. Si es posible, incluye una breve explicación para la respuesta correcta que ayude al usuario a entender el concepto.
`,
});

const generateReviewTestFlow = ai.defineFlow(
  {
    name: 'generateReviewTestFlow',
    inputSchema: GenerateReviewTestInputSchema,
    outputSchema: GenerateReviewTestOutputSchema,
  },
  async input => {
    const {output} = await generateReviewTestPrompt(input);
    return output || {questions: []};
  }
);
