'use server'
 
import { generateMixedTestFlow } from '@/ai/flows/generate-mixed-test-flow'
import { generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { generateSpecificTestFlow } from '@/ai/flows/generate-specific-test-flow';
import { runFlow } from '@genkit-ai/flow';
 
export async function runGenerateMixedTestFlow(category: string[], level: string) {
  const result = await runFlow(generateMixedTestFlow, { category, level });
  return result;
}

export async function runGenerateSpecificTestFlow(category: string, numQuestions: number, level: string) {
    const result = await runFlow(generateSpecificTestFlow, { category, numQuestions, level });
    return result;
}

export async function runGenerateReviewTestFlow(context: string) {
  const result = await runFlow(generateReviewTestFlow, { context });
  return result;
}
