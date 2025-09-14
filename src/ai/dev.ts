'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/extract-questions-from-pdf.ts';
import '@/ai/flows/generate-test-from-exam-flow.ts';
