/* v2 */
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Bot, BarChart3, User, LogOut, Loader2, Folder, Wand2, Menu, Calendar, ExternalLink, ArrowRight, Share2, Award, BrainCircuit, BookOpen, Users, Search, Clock, Target, ListChecks, Trophy } from 'lucide-react';
import Link from 'next/link';
import { signOut } from '@/lib/firebase/auth';
import { useAuth } from '@/components/auth-provider'; // Import the useAuth hook
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { loadInitialData } from '@/app/actions';
import { type Category } from '@/lib/definitions';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ShareButton } from '@/components/ui/share-button';

const CATEGORY_ICONS: { [key: string]: React.ReactNode } = {
  madrid: <User className="h-6 w-6 text-white" />,
  estado: <BookOpen className="h-6 w-6 text-white" />,
  otros: <BrainCircuit className="h-6 w-6 text-white" />,
  default: <ListChecks className="h-6 w-6 text-white" />,
};

const CATEGORY_COLORS: { [key: string]: string } = {
  madrid: 'bg-blue-500',
  estado: 'bg-green-500',
  otros: 'bg-purple-500',
  default: 'bg-red-500',
};


export default function Home() {
  const user = useAuth(); // Use the user from the AuthProvider
  const [categories, setCategories] = useState<Category[]>([]);
  const [userCount, setUserCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await loadInitialData();
      if (result.success) {
        setCategories(result.categories || []);
        setUserCount(result.userCount || 0);
      } else {
        setError(result.error || 'No se pudieron cargar las categorías.');
        console.error(result.error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleStartTest = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  }

  const handleStartThemedTest = (testName: string) => {
    router.push(`/exam/seed-${encodeURIComponent(testName)}`);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/login'); // Redirect to login after sign out
  };

  const filteredCategories = categories
    .filter(category => category.examCount > 0)
    .filter(category => {
      if (selectedCategory === 'all') return true;
      return category.id === selectedCategory;
    })
    .filter(category => {
      if (searchTerm === '') return true;
      return category.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
     <div className="min-h-screen bg-secondary/30">
      <header className="bg-[#2D3748] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" passHref>
              <div className="flex items-center gap-2">
                 <div className="bg-white p-1 rounded-md">
                   <Logo />
                 </div>
                 <span className="font-bold text-lg hidden sm:inline">TestOpos</span>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              {user ? (
                 <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                       <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem onClick={() => router.push('/stats')}>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      <span>Estadísticas</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <ShareButton />
                  <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={() => router.push('/stats')}><Award className="mr-2 h-4 w-4" /> Ranking</Button>
                  <Button className="bg-slate-700 hover:bg-slate-600 text-white font-bold" onClick={() => router.push('/login')}><ArrowRight className="mr-2 h-4 w-4" /> Iniciar Sesión</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-yellow-300 to-orange-400 p-6 rounded-lg shadow-md mb-10 flex items-center gap-6">
          <Trophy className="h-10 w-10 text-yellow-900/70" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido a TestOpos!</h1>
            <p className="text-gray-700">Inicia sesión para guardar tu progreso, competir en el ranking global y desbloquear el modo IA adaptativo.</p>
          </div>
           <div className="ml-auto flex gap-4">
              <Button className="bg-gray-800 text-white hover:bg-gray-700" onClick={() => router.push('/login')}><ArrowRight className="mr-2 h-4 w-4" />Iniciar Sesión Gratis</Button>
              <Button variant="outline" className="bg-white/30 border-gray-700 text-gray-800 hover:bg-white/50" onClick={() => router.push('/stats')}>Ver Ranking</Button>
           </div>
        </div>

        <section className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2">Prepárate para las oposiciones con nuestro sistema de tests inteligente que se adapta a tu nivel</h2>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
             <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3"><BookOpen className="h-8 w-8 text-blue-600" /></div>
                    <p className="text-3xl font-bold">{categories.reduce((acc, cat) => acc + (cat.examCount || 0), 0)}</p>
                    <p className="text-muted-foreground">Tests Disponibles</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full mb-3"><ListChecks className="h-8 w-8 text-green-600" /></div>
                    <p className="text-3xl font-bold">300+</p>
                    <p className="text-muted-foreground">Preguntas Totales</p>
                </CardContent>
            </Card>
             <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="bg-purple-100 p-3 rounded-full mb-3"><BrainCircuit className="h-8 w-8 text-purple-600" /></div>
                    <p className="text-3xl font-bold">∞</p>
                    <p className="text-muted-foreground">Preguntas IA</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                     <div className="bg-yellow-100 p-3 rounded-full mb-3"><Users className="h-8 w-8 text-yellow-600" /></div>
                    <p className="text-3xl font-bold">{userCount}</p>
                    <p className="text-muted-foreground">Usuarios Compitiendo</p>
                </CardContent>
            </Card>
        </div>

        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><ListChecks className="h-5 w-5" /> Exámenes Completos y por Categoría</h3>
                {user ? <Badge variant="secondary">Modo Registrado</Badge> : <Badge variant="secondary">Modo Invitado</Badge>}
            </div>
             <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Buscar tests..." className="pl-10" onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                     <Select onValueChange={setSelectedCategory} defaultValue="all">
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Todas las categorías" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas las categorías</SelectItem>
                            {categories.map(cat => (
                                <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                 <Button onClick={() => router.push('/generate')}>
                    <Wand2 className="mr-2 h-4 w-4" /> Generar Test con IA
                </Button>
            </div>
        </div>
        
         {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="mr-2 h-8 w-8 animate-spin" />
            <p>Cargando tests...</p>
          </div>
        ) : error ? (
           <Card className="text-center p-8 bg-red-50 border-red-200">
                <p className="text-red-600 font-semibold">Error al cargar los datos</p>
                <p className="text-red-500 mt-2">{error}</p>
            </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCategories.map((category) => (
                <Card key={category.id} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${CATEGORY_COLORS[category.id] || CATEGORY_COLORS.default}`}>
                                {CATEGORY_ICONS[category.id] || CATEGORY_ICONS.default}
                            </div>
                            <div>
                                <CardTitle className="text-lg mb-1">{category.name}</CardTitle>
                                <Badge variant="outline">{category.examCount} {category.examCount > 1 ? 'exámenes' : 'examen'}</Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground mb-4">
                            Exámenes disponibles para la categoría de {category.name}. ¡Prepárate para el éxito!
                        </p>
                    </CardContent>
                    <CardFooter>
                         <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white" onClick={() => handleStartTest(category.id)}>
                            Ver Exámenes
                         </Button>
                    </CardFooter>
                </Card>
            ))}
          </div>
        )}

        <div className="mb-12">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4"><Folder className="h-5 w-5" /> Tests por Temario</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Constitución Española</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Constitución Española de 1978.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Constitución Española')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Estatuto de Autonomía de Madrid</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley Orgánica 3/1983, del Estatuto de Autonomía.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Estatuto de Autonomía de la Comunidad de Madrid')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Gobierno y Administración de Madrid</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley 1/1983, del Gobierno y Administración.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Ley 1/1983 - Gobierno y Administración de la Comunidad de Madrid')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Estatuto Básico del Empleado Público (EBEP)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre el Real Decreto Legislativo 5/2015.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Test sobre Estatuto Básico del Empleado Público')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Tema 28 - Sistema de la Seguridad Social</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre el Sistema Español de la Seguridad Social.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('TEMA 28: El Sistema Español de la Seguridad Social')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Tema 14 - Las Fuentes del Derecho</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre las fuentes del derecho, la ley y sus clases.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('TEMA 14: LAS FUENTES DEL DERECHO. LA LEY Y SUS CLASES.')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Ley 39/2015 - Procedimiento Administrativo</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley 39/2015, del Procedimiento Administrativo Común.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Ley 39/2015 - Procedimiento Administrativo Común')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Ley 29/1998 - Jurisdicción Contencioso-Administrativa</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley 29/1998, reguladora de la Jurisdicción Contencioso-administrativa.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Ley 29/1998 - Jurisdicción Contencioso-Administrativa')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Ley 19/2013 - Transparencia y Buen Gobierno</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley 19/2013, de transparencia, acceso a la información pública y buen gobierno.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Ley 19/2013 - Transparencia y Buen Gobierno')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Ley Orgánica 3/2007 - Igualdad</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley Orgánica para la igualdad efectiva de mujeres y hombres.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Ley Orgánica 3/2007 - Igualdad')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Ley 9/2017 - Contratos del Sector Público</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley 9/2017, de Contratos del Sector Público.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
              <Card>
                <CardHeader>
                    <CardTitle>Ley 9/1990 - Hacienda de la Comunidad de Madrid</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Test completo sobre la Ley 9/1990, Reguladora de la Hacienda de la Comunidad de Madrid.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => handleStartThemedTest('LEY 9/1990, de 8 de noviembre, REGULADORA DE LA HACIENDA DE LA COMUNIDAD DE MADRID')}>
                        Realizar Test
                    </Button>
                </CardFooter>
            </Card>
          </div>
        </div>

      </main>
    </div>
  );
}
