
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
import { GenerateReviewTestInputSchema, GenerateReviewTestOutputSchema, type GenerateReviewTestInput, type GenerateReviewTestOutput } from './types';

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
    return output!;
  }
);
