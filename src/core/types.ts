import { z, ZodSchema } from 'zod';

// --- LLM Abstraction ---

/**
 * Defines a generic interface for a Large Language Model provider.
 * This allows us to abstract the actual implementation (e.g., Genkit)
 * and makes our core logic testable.
 */
export interface LLMProvider {
  generate<T extends ZodSchema>(prompt: string, outputSchema: T): Promise<z.infer<T>>;
}

// --- Core Data Schemas ---

export const QuestionSchema = z.object({
  questionText: z.string().describe('El texto de la pregunta. No debe incluir el número de la pregunta.'),
  options: z.array(z.string()).length(4).describe('Un array de 4 posibles respuestas.'),
  correctAnswerIndex: z.number().min(0).max(3).describe('El índice (0-3) de la respuesta correcta en el array de opciones.'),
  explanation: z.string().optional().describe('Una breve explicación de por qué la respuesta es correcta, para ayudar al estudiante a aprender.')
});

export const TestSchema = z.object({
    questions: z.array(QuestionSchema)
});


// --- Service Input Parameter Schemas ---

export const SpecificTestParamsSchema = z.object({
  category: z.string(),
  numQuestions: z.number().int().min(1).max(100),
  level: z.string(),
});

export const MixedTestParamsSchema = z.object({
  categories: z.array(z.string()).min(1),
  numQuestions: z.number().int().min(1).max(100),
  level: z.string(),
});

export const ReviewTestParamsSchema = z.object({
  context: z.string(),
  numQuestions: z.number().int().min(1).max(100),
});


// --- Inferred Types ---

export type Question = z.infer<typeof QuestionSchema>;
export type Test = z.infer<typeof TestSchema>;

export type SpecificTestParams = z.infer<typeof SpecificTestParamsSchema>;
export type MixedTestParams = z.infer<typeof MixedTestParamsSchema>;
export type ReviewTestParams = z.infer<typeof ReviewTestParamsSchema>;
