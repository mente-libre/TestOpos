
'use server';

/**
 * @fileOverview Generates a new test based on existing exam questions.
 *
 * - generateTestFromExam - A function that generates a new test.
 * - GenerateTestFromExamInput - The input type for the function.
 * - GenerateTestFromExamOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestFromExamInputSchema = z.object({
  topic: z.string().describe('The specific topic for the new test (e.g., "La Constitución Española").'),
  category: z.string().describe('The general category of the exam (e.g., "madrid", "estado").'),
  context: z.string().describe('A string containing questions and answers from existing exams to provide context.'),
});
export type GenerateTestFromExamInput = z.infer<
  typeof GenerateTestFromExamInputSchema
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

const GenerateTestFromExamOutputSchema = z.object({
  questions: z
    .array(QuestionSchema)
    .describe(
      'An array of 10 new question objects generated based on the context.'
    ),
});
export type GenerateTestFromExamOutput = z.infer<
  typeof GenerateTestFromExamOutputSchema
>;

export async function generateTestFromExam(
  input: GenerateTestFromExamInput
): Promise<GenerateTestFromExamOutput> {
  return generateTestFromExamFlow(input);
}

const generateTestFromExamPrompt = ai.definePrompt({
  name: 'generateTestFromExamPrompt',
  input: {schema: GenerateTestFromExamInputSchema},
  output: {schema: GenerateTestFromExamOutputSchema},
  prompt: `Eres un experto creando tests para oposiciones en España. Tu tarea es generar 10 preguntas **nuevas y originales** sobre el tema "{{topic}}" para la categoría "{{category}}".

Usa las siguientes preguntas y respuestas existentes como **inspiración y guía de estilo**, pero **no las copies**. El objetivo es crear un test completamente nuevo que evalúe conocimientos similares.

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
  async input => {
    const {output} = await generateTestFromExamPrompt(input);
    return output || {questions: []};
  }
);
