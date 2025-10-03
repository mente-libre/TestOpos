"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  signInWithGoogle,
  createUserWithEmailAndPassword,
} from "@/lib/firebase/auth";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Although we collect it, we are not using it yet.
  const [error, setError] = useState<string | null>(null);

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(email, password);
      // The AuthProvider will handle the redirect
    } catch (error: any) {
      console.error("Error during email registration:", error);
      setError("Error al registrar la cuenta. Es posible que el email ya esté en uso.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // The AuthProvider will handle the redirect
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      setError("Error al registrar con Google.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-2xl text-center">Registro</CardTitle>
          <CardDescription className="text-center">
            Crea una cuenta para empezar a generar tests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailRegister}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Nombre</Label>
                <Input
                  id="first-name"
                  placeholder="Tu nombre"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
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
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <Button type="submit" className="w-full">
                Crear cuenta
              </Button>
            </div>
          </form>
          <Button
            variant="outline"
            className="w-full mt-4"
            onClick={handleGoogleSignIn}
          >
            Registrarse con Google
          </Button>
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="underline">
              Inicia sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
