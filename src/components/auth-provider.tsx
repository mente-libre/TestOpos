'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase/auth';
import { usePathname, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

// Define the shape of the context
interface AuthContextType {
  user: User | null;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't do anything while loading

    const isAuthPage = pathname === '/login' || pathname === '/register';

    if (!user && !isAuthPage) {
      // If the user is not logged in and not on an auth page, redirect to login
      router.push('/login');
    } else if (user && isAuthPage) {
      // If the user is logged in and tries to access an auth page, redirect to home
      router.push('/');
    }
  }, [user, isLoading, pathname, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    );
  }

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  // In this new setup, the context value is an object { user: User | null }
  // We return the user directly for convenience, which matches the old hook's behavior.
  return context.user;
};
