import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const modelName = 'googleai/gemini-1.5-flash-latest';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
      apiVersion: ['v1', 'v1beta'],
    }),
  ],
  model: modelName,
  
});
