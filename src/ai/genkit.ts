import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Define the model using an environment variable for flexibility, with a fallback.
// We use gemini-1.5-flash-latest as the default for its speed and general availability.
const modelName = 'googleai/gemini-1.5-flash-latest';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
      apiVersion: 'v1', // Force the stable v1 API to support modern models
    }),
  ],
  model: modelName,
});
