import { ai } from '../genkit';
import { TestGeneratorService } from '@/core/services/TestGeneratorService';
import { GenkitProvider } from '@/core/lib/GenkitProvider';
import { SpecificTestParamsSchema } from '@/core/types';
import { z } from 'zod';

const FlowOutputSchema = z.object({
  questions: z.array(z.any()),
});

export const generateSpecificTestFlow = ai.defineFlow(
  {
    name: 'generateSpecificTestFlow',
    inputSchema: SpecificTestParamsSchema,
    outputSchema: FlowOutputSchema,
  },
  async (params) => {
    const genkitProvider = new GenkitProvider();
    const testGenerator = new TestGeneratorService(genkitProvider);
    const test = await testGenerator.generateSpecificTest(params);
    return test;
  }
);
