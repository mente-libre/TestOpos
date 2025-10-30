import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Define the model using an environment variable for flexibility, with a fallback.
const modelName = process.env.GENAI_MODEL || 'googleai/gemini-1.5-pro-latest';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
    }),
  ],
  model: modelName,
});
