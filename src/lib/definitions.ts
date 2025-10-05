// This file contains shared type definitions and constants used across the application,
// in both server and client components. It has no 'use client' or 'use server' directive.

import { Timestamp } from 'firebase/firestore';

// Centralized category definitions, safe for client and server use
export const CATEGORY_DEFINITIONS = [
    { id: "madrid", name: "Auxiliar Administrativo Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];


// Main type for an exam document
export interface Exam {
  id: string;
  userId: string;
  fileName: string;
  category: string;
  questions: Question[];
  createdAt: Timestamp | number; // Can be a Timestamp from Firestore or a number for client-side
}

// Type for a single question within an exam
export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

// Type for the summarized category data
export interface Category {
    id: string;
    name: string;
    examCount: number;
}

// Type for a test result document
export interface TestResult {
  id: string;
  userId: string;
  testTitle: string;
  score: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  totalQuestions: number;
  createdAt: Timestamp | number;
}

// Type for the aggregated user ranking data
export interface UserRanking {
    userId: string;
    userName: string;
    averageScore: number;
    testsTaken: number;
}


    