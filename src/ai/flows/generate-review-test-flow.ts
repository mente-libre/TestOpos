import { z } from 'zod';
import { ai } from '../genkit';
import { defineFlow } from '@genkit-ai/core';

const QuestionSchema = z.object({
    questionText: z.string().describe('El texto de la pregunta. No debe incluir el número de la pregunta.'),
    options: z.array(z.string()).length(4).describe('Un array de 4 posibles respuestas.'),
    correctAnswerIndex: z.number().min(0).max(3).describe('El índice (0-3) de la respuesta correcta en el array de opciones.'),
    explanation: z.string().optional().describe('Una breve explicación de por qué la respuesta es correcta, para ayudar al estudiante a aprender.')
});

export const generateReviewTest = defineFlow(
    {
      name: 'generateReviewTestFlow',
      inputSchema: z.object({
        context: z.string().describe('Una cadena de texto que contiene las preguntas y respuestas que el usuario ha fallado previamente. Este es el contexto para generar el test de repaso.')
      }),
      outputSchema: z.object({
        questions: z.array(QuestionSchema).describe('Un array de 15 preguntas de repaso generadas a partir de los fallos.')
      }),
    },
    async (input) => {
      const llmResponse = await ai.generate({
        prompt: `Eres un asistente de estudio especializado en oposiciones en España. El usuario ha fallado algunas preguntas y quiere un test de repaso.
        A partir del siguiente contexto de preguntas falladas y sus respuestas correctas, genera un nuevo test de 15 preguntas.
        Las nuevas preguntas deben ser diferentes a las originales, pero deben tratar sobre los mismos conceptos o artículos de ley para reforzar el conocimiento.
        Genera preguntas con un estilo similar a un examen de oposición real (tipo test, 4 opciones).
        
        Contexto de preguntas falladas:
        ---
        ${input.context}
        ---
        
        Crea 15 preguntas nuevas basadas en estos temas. Para cada pregunta, proporciona el texto, 4 opciones, el índice de la respuesta correcta y una breve explicación.
        La salida debe ser un objeto JSON que se ajuste al esquema proporcionado.`,
        output: {
          format: 'json',
          schema: z.object({
            questions: z.array(QuestionSchema).length(15),
          }),
        },
        config: {
          temperature: 0.8, // Un poco más creativo para variar las preguntas
        },
      });
  
      const result = llmResponse.output();
      if (!result) {
        throw new Error('La IA no generó una salida válida para el test de repaso.');
      }
      return result;
    }
  );
