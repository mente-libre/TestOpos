
'use server';

/**
 * @fileOverview Generates a mixed test with 60 questions from all available topics.
 *
 * - generateMixedTest - A function that generates a new mixed test.
 * - GenerateMixedTestInput - The input type for the function.
 * - GenerateMixedTestOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { GenerateMixedTestInputSchema, GenerateMixedTestOutputSchema, type GenerateMixedTestInput, type GenerateMixedTestOutput } from './types';

export async function generateMixedTest(
  input: GenerateMixedTestInput
): Promise<GenerateMixedTestOutput> {
  return generateMixedTestFlow(input);
}

const generateMixedTestPrompt = ai.definePrompt({
  name: 'generateMixedTestPrompt',
  input: {schema: GenerateMixedTestInputSchema},
  output: {schema: GenerateMixedTestOutputSchema},
  prompt: `Eres un experto creando tests para oposiciones en España. Tu tarea es generar 60 preguntas **nuevas, originales y muy variadas** sobre legislación y temas de administración pública española.

Usa las siguientes preguntas y respuestas existentes como **inspiración y guía de estilo**, pero **no las copies**. El objetivo es crear un test completamente nuevo que sea un desafío completo, mezclando preguntas de diferentes leyes y temas.

Contexto de preguntas existentes de varios temarios:
---
{{{context}}}
---

Asegúrate de que cada pregunta tenga 4 opciones y una respuesta correcta claramente identificada. Si puedes, añade una breve explicación para la respuesta correcta. Las preguntas deben ser variadas y no centrarse en un único tema de los proporcionados.
`,
});

const generateMixedTestFlow = ai.defineFlow(
  {
    name: 'generateMixedTestFlow',
    inputSchema: GenerateMixedTestInputSchema,
    outputSchema: GenerateMixedTestOutputSchema,
  },
  async input => {
    const {output} = await generateMixedTestPrompt(input);
    return output!;
  }
);
