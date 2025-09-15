
import { z } from 'zod';

export const QuestionSchema = z.object({
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

export type Question = z.infer<typeof QuestionSchema>;
