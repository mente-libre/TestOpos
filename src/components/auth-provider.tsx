'use client';

import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import app from '@/lib/firebase/config';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const auth = getAuth(app);
const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Silently get the user in the background
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) {
      return; // Don't redirect while we are still loading the user state
    }

    const isAuthPage = pathname === '/login' || pathname === '/register';

    // The ONLY redirect we will do:
    // If a logged-in user tries to go to the login page, send them to the home page.
    if (user && isAuthPage) {
      router.push('/');
    }

  }, [user, loading, pathname, router]);
  
  // We render the children immediately, without any blocking loading screen.
  // The UI can use the `useAuth` hook to decide what to show based on the user state.
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
