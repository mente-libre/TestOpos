import { ai } from '@/ai/genkit';
import { z, ZodSchema } from 'zod';
import { LLMProvider } from '../types';

/**
 * A concrete implementation of the LLMProvider interface using Genkit.
 * This acts as an adapter between our business logic and the Genkit library.
 */
export class GenkitProvider implements LLMProvider {
  async generate<T extends ZodSchema>(
    prompt: string,
    outputSchema: T,
  ): Promise<z.infer<T>> {
    
    const llmResponse = await ai.generate({
      prompt: prompt,
      output: {
        format: 'json',
        schema: outputSchema,
      },
      config: {
        temperature: 0.9, // Default temperature, can be made configurable
      },
    });

    const result = llmResponse.output;

    if (result === null || result === undefined) {
      throw new Error('AI failed to generate a valid output. The result was null or undefined.');
    }

    // We perform a safe parsing to ensure the AI output strictly conforms to our schema.
    // This prevents malformed data from propagating into our application.
    const parsed = outputSchema.safeParse(result);

    if (!parsed.success) {
        console.error("AI output validation error:", parsed.error.errors);
        throw new Error('AI output did not match the expected schema.');
    }

    return parsed.data;
  }
}
