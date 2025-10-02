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

      const isAuthPage = pathname === '/login' || pathname === '/register';

      if (firebaseUser && isAuthPage) {
        router.push('/');
      }
      
      if (!firebaseUser && !isAuthPage) {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Cargando sesión...</p>
      </div>
    );
  }

  const isAuthPage = pathname === '/login' || pathname === '/register';
  if ((!user && !isAuthPage) || (user && isAuthPage)) {
    return (
       <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Redirigiendo...</p>
      </div>
    );
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
