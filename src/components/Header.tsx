'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth-provider';
import { signOut } from '@/lib/firebase/auth';
import { Logo } from '@/components/ui/logo';

export function Header() {
  const { user, isLoading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect or state update will be handled by AuthProvider
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Logo />
        </Link>
        <h1 className="text-xl font-bold">TestOpos</h1>
      </div>
      <div>
        {!isLoading && (
          <>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">
                  Hola, {user.displayName || user.email}
                </span>
                <Button variant="outline" onClick={handleSignOut}>
                  Cerrar Sesión
                </Button>
              </div>
            ) : (
              <Button asChild>
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
            )}
          </>
        )}
      </div>
    </header>
  );
}
