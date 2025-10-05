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
