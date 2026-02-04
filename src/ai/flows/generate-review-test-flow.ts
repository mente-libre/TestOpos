import { ai } from '../genkit';
import { TestGeneratorService } from '@/core/services/TestGeneratorService';
import { GenkitProvider } from '@/core/lib/GenkitProvider';
import { ReviewTestParamsSchema } from '@/core/types';
import { z } from 'zod';

const FlowOutputSchema = z.object({
  questions: z.array(z.any()),
});

export const generateReviewTestFlow = ai.defineFlow(
  {
    name: 'generateReviewTestFlow',
    inputSchema: ReviewTestParamsSchema,
    outputSchema: FlowOutputSchema,
  },
  async (params) => {
    const genkitProvider = new GenkitProvider();
    const testGenerator = new TestGeneratorService(genkitProvider);
    const test = await testGenerator.generateReviewTest(params);
    return test;
  }
);
