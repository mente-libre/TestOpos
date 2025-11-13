import { z } from 'zod';
import { ai } from '../genkit';
import { defineFlow } from '@genkit-ai/core';

const QuestionSchema = z.object({
    questionText: z.string().describe('El texto de la pregunta. No debe incluir el número de la pregunta.'),
    options: z.array(z.string()).length(4).describe('Un array de 4 posibles respuestas.'),
    correctAnswerIndex: z.number().min(0).max(3).describe('El índice (0-3) de la respuesta correcta en el array de opciones.'),
    explanation: z.string().optional().describe('Una breve explicación de por qué la respuesta es correcta, para ayudar al estudiante a aprender.')
});

const SpecificTestInputSchema = z.object({
  category: z.string().describe('El nombre de la categoría o tema específico sobre el que debe tratar el test.'),
  numQuestions: z.number().int().min(5).max(50).describe('El número de preguntas a generar.'),
  level: z.string().describe('El nivel de dificultad deseado para el test (por ejemplo, Fácil, Medio, Difícil).')
});

const SpecificTestOutputSchema = z.object({
  questions: z.array(QuestionSchema).describe('Un array de preguntas generadas para el tema específico.')
});

export const generateSpecificTestFlow = defineFlow(
    {
      name: 'generateSpecificTestFlow',
      inputSchema: SpecificTestInputSchema,
      outputSchema: SpecificTestOutputSchema,
    },
    async (input) => {
      const llmResponse = await ai.generate({
        prompt: `Eres un asistente experto en la creación de exámenes de oposición para la administración pública en España.
        Tu tarea es generar un test de ${input.numQuestions} preguntas tipo test con 4 opciones de respuesta cada una.
        El test debe centrarse exclusivamente en el siguiente tema: "${input.category}".
        El nivel de dificultad debe ser '${input.level}'.
        
        Para cada pregunta, proporciona el texto de la pregunta, una lista de 4 opciones y el índice de la respuesta correcta.
        Añade también una breve explicación para la respuesta correcta que ayude al aprendizaje.
        
        Genera exactamente ${input.numQuestions} preguntas. No generes ni más ni menos.
        La salida debe ser un objeto JSON que se ajuste al esquema proporcionado.`,
        output: {
          format: 'json',
          schema: z.object({
            questions: z.array(QuestionSchema).length(input.numQuestions),
          }),
        },
        config: {
          temperature: 0.9, // Ligeramente creativo pero enfocado en el tema
        },
      });
  
      const result = llmResponse.output;
      if (!result) {
        throw new Error('La IA no generó una salida válida.');
      }
      return result;
    }
  );
