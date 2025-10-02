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
    if (loading) return;

    const isAuthPage = pathname === '/login' || pathname === '/register';

    if (!user && !isAuthPage) {
      router.push('/login');
    } else if (user && isAuthPage) {
      router.push('/');
    }
  }, [user, loading, pathname, router]);

  const isAuthPage = pathname === '/login' || pathname === '/register';
  const shouldShowLoading = loading || (!user && !isAuthPage) || (user && isAuthPage);

  if (shouldShowLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Cargando sesión...</p>
      </div>
    );
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
