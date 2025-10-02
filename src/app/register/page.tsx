"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
        await signInWithGoogle();
        router.push("/");
    } catch (error) {
        console.error("Error during Google sign-in:", error);
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
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Nombre</Label>
              <Input id="first-name" placeholder="Tu nombre" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Crear cuenta
            </Button>
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
              Registrarse con Google
            </Button>
          </div>
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
