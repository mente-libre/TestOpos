import { z } from 'zod';

// SCHEMAS

export const QuestionSchema = z.object({
  questionText: z.string(),
  options: z.array(z.string()).length(4),
  correctAnswerIndex: z.number().min(0).max(3),
  explanation: z.string().optional(),
});

export const ExamSchema = z.object({
  id: z.string(),
  name: z.string(),
  questions: z.array(QuestionSchema),
  category: z.string(),
});


// TYPES

export type Question = z.infer<typeof QuestionSchema>;

export type Exam = z.infer<typeof ExamSchema>;

export type SeedExam = {
    id: string;
    name: string;
    fileName: string;
    category: string;
    questions: Question[];
}

export interface Category {
    id: string;
    name: string;
    examCount?: number;
}

export interface TestResult {
    id: string;
    createdAt: Date | number;
    score: number;
    testTitle?: string;
    correctCount: number;
    totalQuestions: number;
    userId?: string;
    incorrectCount?: number;
    unansweredCount?: number;
}
