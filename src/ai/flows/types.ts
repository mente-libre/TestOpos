
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


export const GenerateTestFromExamInputSchema = z.object({
  category: z.string().describe('The general category of the exam (e.g., "madrid", "estado").'),
  context: z.string().describe('A string containing questions and answers from existing exams to provide context.'),
});
export type GenerateTestFromExamInput = z.infer<
  typeof GenerateTestFromExamInputSchema
>;

export const GenerateTestFromExamOutputSchema = z.object({
  questions: z
    .array(QuestionSchema)
    .describe(
      'An array of 25 new question objects generated based on the context.'
    ),
});
export type GenerateTestFromExamOutput = z.infer<
  typeof GenerateTestFromExamOutputSchema
>;


export const GenerateReviewTestInputSchema = z.object({
  context: z.string().describe('A string containing the questions and correct answers that the user previously failed, to provide context for generating new review questions.'),
});
export type GenerateReviewTestInput = z.infer<
  typeof GenerateReviewTestInputSchema
>;

export const GenerateReviewTestOutputSchema = z.object({
  questions: z
    .array(QuestionSchema)
    .describe(
      'An array of 10 new question objects generated based on the topics of the failed questions.'
    ),
});
export type GenerateReviewTestOutput = z.infer<
  typeof GenerateReviewTestOutputSchema
>;

export const GenerateMixedTestInputSchema = z.object({
  context: z.string().describe('A string containing questions and answers from all available exams to provide context.'),
});
export type GenerateMixedTestInput = z.infer<
  typeof GenerateMixedTestInputSchema
>;

export const GenerateMixedTestOutputSchema = z.object({
  questions: z
    .array(QuestionSchema)
    .length(60)
    .describe(
      'An array of 60 new and varied question objects generated based on the context.'
    ),
});
export type GenerateMixedTestOutput = z.infer<
  typeof GenerateMixedTestOutputSchema
>;
