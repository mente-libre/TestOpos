import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Get the API key from the environment
const apiKey = process.env.GOOGLE_API_KEY;

// Throw an error if the API key is not set. This will prevent the app from crashing with
// an obscure error message if the key is missing.
if (!apiKey) {
  throw new Error(
    'GOOGLE_API_KEY environment variable not set. Please add it to your .env file.'
  );
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: apiKey,
    }),
  ],
  model: 'googleai/gemini-1.5-pro',
});
