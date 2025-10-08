
'use server';

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { GenerateMixedTestInputSchema, GenerateMixedTestOutputSchema, type GenerateMixedTestInput, type GenerateMixedTestOutput } from './types';

const generateMixedTestFlow = ai.defineFlow(
  {
    name: 'generateMixedTestFlow',
    inputSchema: GenerateMixedTestInputSchema,
    outputSchema: GenerateMixedTestOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
        prompt: `Eres un experto creando tests para oposiciones en España. Tu tarea es generar 60 preguntas **nuevas, originales y muy variadas** sobre legislación y temas de administración pública española.

        Usa las siguientes preguntas y respuestas existentes como **inspiración y guía de estilo**, pero **no las copies**. El objetivo es crear un test completamente nuevo que sea un desafío completo, mezclando preguntas de diferentes leyes y temas.
        
        Contexto de preguntas existentes de varios temarios:
        ---
        ${input.context}
        ---
        
        Asegúrate de que cada pregunta tenga 4 opciones y una respuesta correcta claramente identificada. Si puedes, añade una breve explicación para la respuesta correcta. Las preguntas deben ser variadas y no centrarse en un único tema de los proporcionados.
        `,
        model: 'googleai/gemini-1.5-flash-latest',
        output: {
            schema: GenerateMixedTestOutputSchema
        }
      });

    const output = llmResponse.output;

    if (!output) {
        throw new Error("AI failed to generate a valid test structure.");
    }

    return output;
  }
);

export async function generateMixedTest(
    input: GenerateMixedTestInput
  ): Promise<GenerateMixedTestOutput> {
    return generateMixedTestFlow(input);
  }
