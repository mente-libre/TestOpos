import { appRoute } from '@genkit-ai/next';
import { generateTestFromExamFlow } from '@/ai/flows/generate-test-from-exam-flow';

export const POST = appRoute(generateTestFromExamFlow);
