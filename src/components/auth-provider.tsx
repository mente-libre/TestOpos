'use client';

import { getAuth, getRedirectResult, type User } from 'firebase/auth';
import app from '@/lib/firebase/config';
import { onAuthStateChange } from '@/lib/firebase/auth';
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
    const processRedirectResult = async () => {
      try {
        // Check for the result of a redirect authentication.
        // This will complete the sign-in process if the user is returning from Google.
        await getRedirectResult(auth);
      } catch (error) {
        console.error("Error processing redirect result:", error);
      }
    };

    processRedirectResult();

    // The onAuthStateChanged listener will now trigger with the correct user state,
    // either from the redirect result or from a returning session.
    const unsubscribe = onAuthStateChange((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // Auth state is determined, no longer loading.
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) {
      return; // Don't perform redirects while auth state is loading.
    }
    
    // If the user is authenticated and on a public auth page, redirect them to the home page.
    if (user && (pathname === '/login' || pathname === '/register')) {
      router.push('/');
    }
  }, [user, pathname, router, loading]);

  // While the auth state is being determined, show a loading indicator.
  // This prevents a flash of unauthenticated content.
  if (loading) {
    return <div>Cargando sesión...</div>;
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
