import { defineFlow } from '@genkit-ai/core';
import { TestGeneratorService } from '@/core/services/TestGeneratorService';
import { GenkitProvider } from '@/core/lib/GenkitProvider';
import { SpecificTestParamsSchema } from '@/core/types';
import { z } from 'zod';

// The output schema is now dynamic, so we define a generic one for the flow definition.
const FlowOutputSchema = z.object({
  questions: z.array(z.any()), // We can't know the exact length beforehand
});

export const generateSpecificTestFlow = defineFlow(
  {
    name: 'generateSpecificTestFlow',
    inputSchema: SpecificTestParamsSchema,
    outputSchema: FlowOutputSchema, // Using the generic output schema
  },
  async (params) => {
    // 1. Instantiate the service with the Genkit-specific provider
    const genkitProvider = new GenkitProvider();
    const testGenerator = new TestGeneratorService(genkitProvider);

    // 2. Delegate the entire business logic to the service
    const test = await testGenerator.generateSpecificTest(params);

    // 3. Return the result
    return test;
  }
);
