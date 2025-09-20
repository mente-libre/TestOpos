
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BarChart3, User, LogOut, Loader2, Folder, Wand2, Menu, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { onAuthStateChange, signOut } from '@/lib/firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { loadInitialData } from '@/app/actions';
import { type Category } from '@/lib/definitions';
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
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();

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

    const fetchInitialData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await loadInitialData();
        if (result.success && result.categories) {
          setCategories(result.categories);
        } else {
          setCategories([]);
          setError(result.error || "No se pudieron cargar las categorías.");
          console.error("Failed to fetch initial data:", result.error);
        }
      } catch (error) {
         setCategories([]);
         const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado al cargar los datos.';
         setError(errorMessage);
         console.error("An unexpected error occurred while fetching initial data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
    
    return () => unsubscribe();
  }, []);

  const CategoryCard = ({ category }: { category: Category }) => {
    const isDisabled = category.examCount === 0;

    const cardContent = (
      <Card 
        className={`group hover:shadow-lg hover:-translate-y-1 transition-transform h-full ${
          isDisabled ? 'opacity-50 cursor-not-allowed bg-secondary/30' : 'cursor-pointer bg-secondary/30 hover:bg-secondary/60'
        }`}
      >
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <Folder className="h-12 w-12 text-accent group-hover:text-accent/80 transition-colors mb-4" />
          <h4 className="font-semibold text-lg text-primary">{category.name}</h4>
          <p className="text-sm text-muted-foreground">{category.examCount} {category.examCount === 1 ? 'examen' : 'exámenes'}</p>
        </CardContent>
      </Card>
    );

    if (isDisabled) {
      return <div>{cardContent}</div>;
    }

    return (
      <Link href={`/category/${category.id}`} key={category.id} passHref>
        {cardContent}
      </Link>
    );
  };


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Link href="/" passHref><Logo /></Link>
            </div>
             <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link href="#exams-section" className="text-foreground/60 hover:text-foreground/80 transition-colors">Exámenes</Link>
                <Link href="/generate" className="text-foreground/60 hover:text-foreground/80 transition-colors">Generador IA</Link>
                <Link href="/stats" className="text-foreground/60 hover:text-foreground/80 transition-colors">Estadísticas</Link>
              </nav>

            <div className="flex items-center gap-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="hidden md:flex items-center gap-2 text-foreground/80 hover:text-foreground">
                      <User className="h-5 w-5" />
                      <span>{user.displayName || 'Mi Cuenta'}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dark">
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link href="/login" passHref>
                    <Button variant="ghost" className="text-foreground/80 hover:text-foreground">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/register" passHref>
                    <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">Registrarse</Button>
                  </Link>
                </div>
              )}
               <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-foreground/80 hover:text-foreground">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="dark">
                   <div className="flex flex-col h-full">
                    <div className="flex-grow">
                        <nav className="grid gap-4 text-lg font-medium mt-8">
                           <Link href="#exams-section" className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">Exámenes</Link>
                            <Link href="/generate" className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">Generador IA</Link>
                            <Link href="/stats" className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">Estadísticas</Link>
                        </nav>
                    </div>
                    <div className="mt-auto">
                        {user ? (
                             <Button variant="ghost" onClick={signOut} className="w-full justify-start gap-2 text-foreground/80 hover:text-foreground">
                                <LogOut className="h-5 w-5" />
                                <span>Cerrar Sesión</span>
                            </Button>
                        ) : (
                            <div className="grid gap-2">
                                <Link href="/login" passHref>
                                    <Button variant="outline" className="w-full">Iniciar Sesión</Button>
                                </Link>
                                <Link href="/register" passHref>
                                    <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground">Registrarse</Button>
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

      <main className="flex-grow">
        <section className="py-24 md:py-32 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-primary">Prepara tu Futuro, Supera tu Oposición</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              La plataforma definitiva para practicar con exámenes reales y generar tests ilimitados con inteligencia artificial. Tu éxito empieza aquí.
            </p>
             <div className="flex justify-center gap-4">
                <Link href="#exams-section" passHref>
                    <Button size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground">
                      Empezar a Practicar <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                </Link>
             </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Las Herramientas para tu Éxito</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center bg-transparent border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Folder className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Exámenes Reales</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Accede a un banco de exámenes de convocatorias anteriores para practicar en condiciones reales.</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-transparent border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Bot className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Generador IA de Tests</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Crea tests personalizados e ilimitados para reforzar las áreas que más necesitas.</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-transparent border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Análisis de Progreso</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Obtén estadísticas detalladas de tu rendimiento para identificar tus puntos fuertes y débiles.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="exams-section" className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Elige tu Categoría</h2>

            {isLoading ? (
              <div className="flex justify-center items-center p-8">
                  <Loader2 className="mr-2 h-8 w-8 animate-spin text-accent" />
                  <p className="text-muted-foreground">Cargando categorías...</p>
              </div>
            ) : error ? (
                <div className="text-center text-red-500 py-10">
                    <p className="mb-4">Error al cargar los exámenes: {error}</p>
                    <Button onClick={() => window.location.reload()} variant="outline">Reintentar</Button>
                </div>
            ) : (
                categories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories.map(category => (
                          <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-muted-foreground py-10">
                        <p className="mb-4">Aún no hay exámenes disponibles.</p>
                        <Link href="/generate" passHref>
                            <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                                <Wand2 className="mr-2 h-4 w-4"/>
                                Genera tu primer test con IA
                            </Button>
                        </Link>
                    </div>
                )
            )}
          </div>
        </section>

      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
            <p>© 2024 TestOpos. Preparación inteligente para oposiciones.</p>
        </div>
      </footer>
    </div>
  );
}
