import { appRoute } from '@genkit-ai/next';
import { generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';

export const POST = appRoute(generateReviewTestFlow);
