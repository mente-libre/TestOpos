
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BarChart3, User, LogOut, Loader2, Folder, Wand2, Menu, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { onAuthStateChange, signOut } from '@/lib/firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { loadInitialData } from '@/app/actions';
import { type Category } from '@/lib/firebase/firestore';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

// A plain object to store user info, safe for React state
interface AppUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

export default function Home() {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [categories, setCategories] = useState<Category[]>([]);
  
  const router = useRouter();

  // Effect for handling auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChange((firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Effect for fetching initial data, independent of user state
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      const result = await loadInitialData();
      if (result.success) {
        setCategories(result.categories);
      } else {
        setCategories([]);
        // Do not show an error to the user, just log it.
        console.error("Failed to fetch initial data:", result.error);
      }
      setIsLoading(false);
    };

    fetchInitialData();
  }, []); // Empty dependency array ensures this runs once on mount


  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Logo />
            </div>
             <nav className="hidden md:flex items-center space-x-4">
                <a href="#exams-section" className="text-secondary font-medium hover:text-primary transition-colors">Exámenes</a>
                <Link href="/generate" className="text-secondary font-medium hover:text-primary transition-colors">Generador IA</Link>
                <Link href="/stats" className="text-secondary font-medium hover:text-primary transition-colors">Estadísticas</Link>
                <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Ayuda</a>
              </nav>

            <div className="flex items-center gap-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="hidden md:flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span>{user.displayName || 'Mi Cuenta'}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link href="/login" passHref>
                    <Button variant="outline">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/register" passHref>
                    <Button>Registrarse</Button>
                  </Link>
                </div>
              )}
               <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                   <div className="flex flex-col h-full">
                    <div className="flex-grow">
                        <nav className="grid gap-4 text-lg font-medium mt-8">
                           <a href="#exams-section" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">Exámenes</a>
                            <Link href="/generate" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">Generador IA</Link>
                            <Link href="/stats" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">Estadísticas</Link>
                            <a href="#" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">Ayuda</a>
                        </nav>
                    </div>
                    <div className="mt-auto">
                        {user ? (
                             <Button variant="ghost" onClick={signOut} className="w-full justify-start gap-2">
                                <LogOut className="h-5 w-5" />
                                <span>Cerrar Sesión</span>
                            </Button>
                        ) : (
                            <div className="grid gap-2">
                                <Link href="/login" passHref>
                                    <Button variant="outline" className="w-full">Iniciar Sesión</Button>
                                </Link>
                                <Link href="/register" passHref>
                                    <Button className="w-full">Registrarse</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prepara tus oposiciones con IA</h1>
            <p className="max-w-3xl mx-auto text-lg text-secondary mb-8">
              Practica con exámenes reales o deja que nuestra IA genere nuevos tests para ti. La preparación más completa a tu alcance.
            </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#exams-section" passHref>
                    <Button size="lg">
                      Ver Exámenes
                    </Button>
                </Link>
                 <Link href="/generate" passHref>
                    <Button size="lg" variant="outline" className="bg-white">
                        <Wand2 className="mr-2 h-5 w-5 text-primary"/>
                        Generar Test con IA
                    </Button>
                </Link>
             </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">IA genera tests</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Nuestra IA crea tests personalizados con preguntas y respuestas basadas en exámenes reales.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Analiza tu progreso</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Obtén estadísticas detalladas de tu rendimiento, identifica tus puntos débiles y mejora.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="exams-section" className="py-16 md:py-24 bg-light dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Tus exámenes</h2>

            {isLoading ? (
              <div className="flex justify-center items-center p-8">
                  <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                  <p>Cargando tus datos...</p>
              </div>
            ) : (
                categories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories.map(category => (
                          <Link href={`/category/${category.id}`} key={category.id} passHref>
                             <Card className="group hover:shadow-lg hover:-translate-y-1 transition-transform h-full cursor-pointer">
                                <CardContent className="pt-6 flex flex-col items-center text-center">
                                    <Folder className="h-16 w-16 text-primary/70 group-hover:text-primary transition-colors mb-4" />
                                    <h4 className="font-semibold text-lg">{category.name}</h4>
                                    <p className="text-sm text-muted-foreground">{category.examCount} {category.examCount === 1 ? 'examen' : 'exámenes'}</p>
                                </CardContent>
                            </Card>
                          </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-muted-foreground py-10">
                        <p className="mb-4">Aún no hay exámenes disponibles.</p>
                        <Link href="/generate" passHref>
                            <Button>
                                <Wand2 className="mr-2 h-4 w-4"/>
                                Genera tu primer test con IA
                            </Button>
                        </Link>
                    </div>
                )
            )}
          </div>
        </section>

        <section id="oposiciones-section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold">Próximas Convocatorias</h2>
              <p className="text-lg text-muted-foreground mt-2">Ejemplos de las últimas convocatorias publicadas.</p>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Auxiliar Administrativo (Estado)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-muted-foreground"><strong>Plazas:</strong> 1.150</p>
                        <p className="text-muted-foreground"><strong>Requisitos:</strong> Título de Graduado en ESO o equivalente.</p>
                        <Badge variant="secondary">Inscripción Abierta</Badge>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Policía Nacional (Escala Básica)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-muted-foreground"><strong>Plazas:</strong> 2.458</p>
                        <p className="text-muted-foreground"><strong>Requisitos:</strong> Título de Bachiller o equivalente.</p>
                        <Badge variant="destructive">Cerrada</Badge>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Administrativo (Comunidad de Madrid)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-muted-foreground"><strong>Plazas:</strong> 550</p>
                        <p className="text-muted-foreground"><strong>Requisitos:</strong> Título de Bachiller o Técnico.</p>
                        <Badge variant="secondary">Próximamente</Badge>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center mt-12">
                <a href="https://oposiciones.es/?utm_source=google&utm_medium=cpc&utm_campaign=oposiciones-es_global_es_gsn&MLL=5175&utm_term=oposiciones&gad_source=1&gad_campaignid=16767538026&gbraid=0AAAAACaR6YSB1u3xKeZ5GYZVLzedQ05zT&gclid=Cj0KCQjw8p7GBhCjARIsAEhghZ1DU5zTTkInhijrrtX3d89HdhaqX93OQxPy2RCY_zMryvjnZG4MEbQaAnruEALw_wcB" target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                        Ver todas las convocatorias
                        <ExternalLink className="ml-2 h-5 w-5"/>
                    </Button>
                </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-dark text-white py-8 text-center mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p>© 2024 TestOpos - Preparación inteligente para oposiciones</p>
            <p className="text-sm text-gray-400 mt-2">Una app segura y eficaz para tu preparación</p>
        </div>
      </footer>
    </div>
  );
}

    

    
