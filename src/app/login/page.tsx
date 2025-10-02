'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInWithGoogle, signInWithEmailAndPassword, getRedirectResult, getAuth } from '@/lib/firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        // The AuthProvider will handle the redirect, so we just need to check.
        await getRedirectResult(getAuth());
      } catch (error: any) {
        setError(error.message);
      }
    };

    checkRedirectResult();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // The AuthProvider will handle the redirect.
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(email, password);
      // The AuthProvider will handle the redirect after the state changes.
    } catch (error: any) {
      setError(error.message);
      console.error('Error signing in: ', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-sm">
        <CardHeader>
           <div className="flex justify-center mb-4">
              <Logo />
            </div>
          <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
          <CardDescription className="text-center">
            Introduce tu email para acceder a tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                  <div className="flex items-center">
                      <Label htmlFor="password">Contraseña</Label>
                      <Link href="#" className="ml-auto inline-block text-sm underline">
                          ¿Has olvidado tu contraseña?
                      </Link>
                  </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </div>
          </form>
          <Button variant="outline" className="w-full mt-4" onClick={handleGoogleSignIn}>
            Acceder con Google
          </Button>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{' '}
            <Link href="/register" className="underline">
              Regístrate
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
