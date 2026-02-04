import { appRoute } from '@genkit-ai/next';
import { generateSpecificTestFlow } from '@/ai/flows/generate-specific-test-flow';

export const POST = appRoute(generateSpecificTestFlow);
