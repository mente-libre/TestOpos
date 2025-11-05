import { z } from 'zod';
import { ai } from '../genkit';
import { defineFlow } from '@genkit-ai/core';


const QuestionSchema = z.object({
    questionText: z.string().describe('El texto de la pregunta. No debe incluir el número de la pregunta.'),
    options: z.array(z.string()).length(4).describe('Un array de 4 posibles respuestas.'),
    correctAnswerIndex: z.number().min(0).max(3).describe('El índice (0-3) de la respuesta correcta en el array de opciones.'),
    explanation: z.string().optional().describe('Una breve explicación de por qué la respuesta es correcta, para ayudar al estudiante a aprender.')
});

export const generateMixedTestFlow = defineFlow(
    {
      name: 'generateMixedTestFlow',
      inputSchema: z.object({
        category: z.array(z.string()).describe('Una lista de todos los nombres de las categorías disponibles para el test. La IA debe mezclar preguntas de estos temas.'),
        level: z.string().describe('El nivel de dificultad deseado para el test (por ejemplo, Fácil, Medio, Difícil).')
      }),
      outputSchema: z.object({
        questions: z.array(QuestionSchema).length(60).describe('Un array de exactamente 60 preguntas generadas.')
      }),
    },
    async (input) => {
      const themes = input.category.join(', ');
  
      const llmResponse = await ai.generate({
        prompt: `Eres un asistente experto en la creación de exámenes de oposición para la administración pública en España. 
        Tu tarea es generar un test de 60 preguntas de tipo test con 4 opciones de respuesta cada una. 
        El test debe ser un repaso general que mezcle preguntas de los siguientes temas: ${themes}.
        El nivel de dificultad debe ser '${input.level}'.
        
        Para cada pregunta, proporciona el texto de la pregunta, una lista de 4 opciones y el índice de la respuesta correcta.
        Asegúrate de que las preguntas sean relevantes, claras y estén bien formuladas, reflejando el estilo y la complejidad de un examen de oposición real.
        Añade también una breve explicación para la respuesta correcta que ayude al aprendizaje.
        
        Genera exactamente 60 preguntas. No generes ni más ni menos.
        La salida debe ser un objeto JSON que se ajuste al esquema proporcionado.`,
        output: {
          format: 'json',
          schema: z.object({
            questions: z.array(QuestionSchema).length(60),
          }),
        },
        config: {
          temperature: 1, // Aumenta la creatividad para un test variado
        },
      });
  
      const result = llmResponse.output();
      if (!result) {
        throw new Error('La IA no generó una salida válida.');
      }
      return result;
    }
  );
