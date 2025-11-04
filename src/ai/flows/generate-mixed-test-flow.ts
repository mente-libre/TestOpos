import {ai} from '../genkit';
import {z} from 'zod';
import {
  GenerateMixedTestOutput,
  GenerateMixedTestOutputSchema,
} from './types';

const GenerateMixedTestInputSchema = z.object({
  category: z.array(z.string()),
  level: z.enum(['Fácil', 'Medio', 'Difícil']),
});

type GenerateMixedTestInput = z.infer<typeof GenerateMixedTestInputSchema>;

const generateMixedTestPrompt = ai.definePrompt({
  name: 'generateMixedTestPrompt',
  input: {schema: GenerateMixedTestInputSchema},
  output: {schema: GenerateMixedTestOutputSchema},
  prompt: `You are an expert in creating multiple-choice exams for Spanish civil service examinations.

    Generate a test with 60 questions based on the following categories: {{{category}}}.
    The difficulty level should be: {{{level}}}.

    Each question must have 4 options and a single correct answer.
    The output must be a JSON object matching the expected schema.
    `,
});

export const generateMixedTestFlow = ai.defineFlow(
  {
    name: 'generateMixedTestFlow',
    inputSchema: GenerateMixedTestInputSchema,
    outputSchema: GenerateMixedTestOutputSchema,
  },
  async (input: GenerateMixedTestInput): Promise<GenerateMixedTestOutput> => {
    const {output} = await generateMixedTestPrompt(input);
    return output!;
  }
);
