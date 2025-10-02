'use client';

import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import app from '@/lib/firebase/config';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const auth = getAuth(app);
const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) return; // Don't do anything while loading

    const isAuthPage = pathname === '/login' || pathname === '/register';

    // If the user is logged in and tries to access login/register, redirect to home
    if (user && isAuthPage) {
      router.push('/');
    }
    // We no longer redirect non-authenticated users to the login page.
    // They can browse the site as guests.

  }, [user, loading, pathname, router]);

  const isAuthPage = pathname === '/login' || pathname === '/register';
  // Show loading screen only while fetching user or if a logged-in user is on an auth page
  const shouldShowLoading = loading || (user && isAuthPage);

  if (shouldShowLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Cargando...</p>
      </div>
    );
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
