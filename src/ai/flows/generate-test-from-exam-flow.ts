
'use server';

/**
 * @fileOverview Generates a new test based on existing exam questions.
 *
 * - generateTestFromExam - A function that generates a new test.
 * - GenerateTestFromExamInput - The input type for the function.
 * - GenerateTestFromExamOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { GenerateTestFromExamInputSchema, GenerateTestFromExamOutputSchema, type GenerateTestFromExamInput, type GenerateTestFromExamOutput } from './types';

export async function generateTestFromExam(
  input: GenerateTestFromExamInput
): Promise<GenerateTestFromExamOutput> {
  return generateTestFromExamFlow(input);
}

const generateTestFromExamPrompt = ai.definePrompt({
  name: 'generateTestFromExamPrompt',
  input: {schema: GenerateTestFromExamInputSchema},
  output: {schema: GenerateTestFromExamOutputSchema},
  prompt: `Eres un experto creando tests para oposiciones en España. Tu tarea es generar 25 preguntas **nuevas, originales y variadas** para la categoría de oposición "{{category}}".

Usa las siguientes preguntas y respuestas existentes como **inspiración y guía de estilo**, pero **no las copies**. El objetivo es crear un test completamente nuevo que evalúe conocimientos generales dentro de esa categoría.

Contexto de preguntas existentes:
---
{{{context}}}
---

Asegúrate de que cada pregunta tenga 4 opciones y una respuesta correcta claramente identificada. Si puedes, añade una breve explicación para la respuesta correcta.
`,
});

const generateTestFromExamFlow = ai.defineFlow(
  {
    name: 'generateTestFromExamFlow',
    inputSchema: GenerateTestFromExamInputSchema,
    outputSchema: GenerateTestFromExamOutputSchema,
  },
  async (input: GenerateTestFromExamInput) => {
    const {output} = await generateTestFromExamPrompt(input);
    if (!output) {
        throw new Error('The AI failed to generate a valid output.');
    }
    return output;
  }
);
