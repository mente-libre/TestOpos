import { appRoute } from '@genkit-ai/next';
import { generateMixedTestFlow } from '@/ai/flows/generate-mixed-test-flow';

export const POST = appRoute(generateMixedTestFlow);
