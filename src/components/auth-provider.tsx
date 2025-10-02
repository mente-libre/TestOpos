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
    // onAuthStateChanged handles everything, including redirect results.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) {
      return; // Don't do anything while auth state is loading
    }

    const isAuthPage = pathname === '/login' || pathname === '/register';

    // If there is no user, and we are not on an auth page, redirect to login
    if (!user && !isAuthPage) {
      router.push('/login');
    }

    // If there is a user, and we are on an auth page, redirect to home
    if (user && isAuthPage) {
      router.push('/');
    }
  }, [user, loading, pathname, router]);

  // While auth state is loading, show a loading indicator.
  if (loading) {
    return <div>Cargando sesión...</div>;
  }

  // This logic ensures that we don't show a flash of the old page
  // while the redirect is in progress.
  const isAuthPage = pathname === '/login' || pathname === '/register';
  if (!user && !isAuthPage) {
      return null; // Render nothing while redirecting to login
  }
  if (user && isAuthPage) {
      return null; // Render nothing while redirecting to home
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
