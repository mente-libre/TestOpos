import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { getAuth } from 'firebase/auth';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// This is a client-side utility
export async function getAuthHeaders() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (currentUser) {
    try {
      const idToken = await currentUser.getIdToken();
      return {
        'Authorization': `Bearer ${idToken}`,
      };
    } catch (error) {
      console.error('Error getting ID token:', error);
      return {};
    }
  }
  return {};
}

/**
 * Cleans the question text to remove noise before sending it to the AI.
 * @param text The raw question text.
 * @returns The cleaned text.
 */
export function cleanQuestionText(text: string): string {
  if (!text) {
    return "";
  }
  // Remove line breaks, article references (e.g., "(Arts. 1-10)"), and trim whitespace.
  const cleanedText = text
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .replace(/\(Arts?\.\s*\d+-\d+\)/gi, '') // Remove patterns like (Arts. 113-122)
    .replace(/¿\d+-\d+\)\s*\n/gi, '') // Remove patterns like ¿113-122) 

    .replace(/¿DE LAS RESPONSABILIDADES\s*\nDISPOSICIONES ADICIONALES/gi, '') // Remove specific noisy headers
    .trim();

  return cleanedText;
}
