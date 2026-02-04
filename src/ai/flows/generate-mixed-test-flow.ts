import { ai } from '../genkit';
import { TestGeneratorService } from '@/core/services/TestGeneratorService';
import { GenkitProvider } from '@/core/lib/GenkitProvider';
import { MixedTestParamsSchema } from '@/core/types';
import { z } from 'zod';

const FlowOutputSchema = z.object({
  questions: z.array(z.any()),
});

export const generateMixedTestFlow = ai.defineFlow(
  {
    name: 'generateMixedTestFlow',
    inputSchema: MixedTestParamsSchema,
    outputSchema: FlowOutputSchema,
  },
  async (params) => {
    const genkitProvider = new GenkitProvider();
    const testGenerator = new TestGeneratorService(genkitProvider);
    const test = await testGenerator.generateMixedTest(params);
    return test;
  }
);
