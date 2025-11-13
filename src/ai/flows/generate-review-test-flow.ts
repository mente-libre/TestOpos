import { z } from 'zod';
import { ai } from '../genkit';
import { defineFlow } from '@genkit-ai/core';

const QuestionSchema = z.object({
    questionText: z.string().describe('El texto de la pregunta. No debe incluir el número de la pregunta.'),
    options: z.array(z.string()).length(4).describe('Un array de 4 posibles respuestas.'),
    correctAnswerIndex: z.number().min(0).max(3).describe('El índice (0-3) de la respuesta correcta en el array de opciones.'),
    explanation: z.string().optional().describe('Una breve explicación de por qué la respuesta es correcta, para ayudar al estudiante a aprender.')
});

const ReviewTestInputSchema = z.object({
  context: z.string().describe('Una cadena de texto que contiene las preguntas y respuestas que el usuario ha fallado previamente. Este es el contexto para generar el test de repaso.')
});

const ReviewTestOutputSchema = z.object({
  questions: z.array(QuestionSchema).length(10).describe('Un array de 10 preguntas nuevas generadas para el repaso.')
});

export const generateReviewTestFlow = defineFlow(
    {
      name: 'generateReviewTestFlow',
      inputSchema: ReviewTestInputSchema,
      outputSchema: ReviewTestOutputSchema,
    },
    async (input) => {
      const llmResponse = await ai.generate({
        prompt: `Eres un asistente experto en la creación de exámenes de oposición en España.
        Tu tarea es generar un test de repaso de 10 preguntas.
        Este test se basará en las preguntas que el usuario ha fallado anteriormente, las cuales se proporcionan en el siguiente contexto:
        
        --- CONTEXTO ---
        ${input.context}
        --- FIN DEL CONTEXTO ---
        
        Analiza los temas de las preguntas falladas y genera 10 preguntas **nuevas y originales** que cubran esos mismos temas, para ayudar al usuario a reforzar sus conocimientos.
        
        Para cada pregunta, proporciona el texto de la pregunta, 4 opciones de respuesta y el índice de la respuesta correcta.
        Añade también una breve explicación para la respuesta correcta.
        
        La salida debe ser un objeto JSON que se ajuste al esquema proporcionado.`,
        output: {
          format: 'json',
          schema: ReviewTestOutputSchema,
        },
        config: {
          temperature: 1,
        },
      });
  
      const result = llmResponse.output;
      if (!result) {
        throw new Error('La IA no generó una salida válida.');
      }
      return result;
    }
  );
