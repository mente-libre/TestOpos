import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Using the latest model with the updated libraries
const modelName = 'googleai/gemini-1.5-flash-latest';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
    }),
  ],
  model: modelName,
});
