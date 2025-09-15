'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/generate-test-from-exam-flow.ts';
import '@/ai/flows/generate-review-test-flow.ts';
