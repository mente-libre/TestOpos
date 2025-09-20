
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Bot, BarChart3, User, LogOut, Loader2, Folder, Wand2, Menu, Calendar, ExternalLink, ArrowRight, Share2, Award, BrainCircuit, BookOpen, Users, Search, Clock, Target, ListChecks, Trophy } from 'lucide-react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface AppUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

const mockTests = [
  {
    title: 'TREBEP - Estatuto Básico del Empleado Público',
    difficulty: 'Medio',
    difficultyColor: 'bg-yellow-400',
    description: 'Test completo sobre el Texto Refundido de la Ley del Estatuto Básico del Empleado Público con 20 preguntas.',
    questions: 20,
    time: 30,
    points: 290,
    tag: 'Función Pública',
    icon: <User className="h-6 w-6 text-white" />,
    iconBgColor: 'bg-blue-500',
  },
  {
    title: 'Ley 39/2015 - Procedimiento Administrativo Común',
    difficulty: 'Medio',
    difficultyColor: 'bg-yellow-400',
    description: 'Evaluación completa sobre el procedimiento administrativo común de las AAPP con 20 preguntas.',
    questions: 20,
    time: 30,
    points: 300,
    tag: 'Derecho Administrativo',
    icon: <BookOpen className="h-6 w-6 text-white" />,
    iconBgColor: 'bg-green-500',
  },
  {
    title: 'Sistema de Seguridad Social',
    difficulty: 'Medio',
    difficultyColor: 'bg-yellow-400',
    description: 'Test completo sobre el sistema español de Seguridad Social con 20 preguntas.',
    questions: 20,
    time: 30,
    points: 285,
    tag: 'Seguridad Social',
    icon: <BrainCircuit className="h-6 w-6 text-white" />,
    iconBgColor: 'bg-purple-500',
  },
    {
    title: 'Quiz Mixto - Administración Pública',
    difficulty: 'Difícil',
    difficultyColor: 'bg-red-500',
    description: 'Preguntas combinadas de TREBEP, Ley 39/2015 y Seguridad Social (20 preguntas).',
    questions: 20,
    time: 35,
    points: 300,
    tag: 'General',
    icon: <ListChecks className="h-6 w-6 text-white" />,
    iconBgColor: 'bg-red-500',
  },
  {
    title: 'TREBEP - Nivel Básico',
    difficulty: 'Fácil',
    difficultyColor: 'bg-green-400',
    description: 'Test de nivel básico sobre TREBEP con las preguntas más fundamentales (20 preguntas).',
    questions: 16,
    time: 25,
    points: 210,
    tag: 'Función Pública',
    icon: <User className="h-6 w-6 text-white" />,
    iconBgColor: 'bg-cyan-500',
  },
    {
    title: 'Ley 39/2015 - Nivel Avanzado',
    difficulty: 'Difícil',
    difficultyColor: 'bg-red-500',
    description: 'Test avanzado sobre procedimiento administrativo para expertos (20 preguntas).',
    questions: 15,
    time: 35,
    points: 250,
    tag: 'Derecho Administrativo',
    icon: <BookOpen className="h-6 w-6 text-white" />,
    iconBgColor: 'bg-indigo-500',
  },
];


export default function Home() {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
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
       setIsLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

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
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex"><Share2 className="mr-2 h-4 w-4" /> Compartir</Button>
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex"><Award className="mr-2 h-4 w-4" /> Ranking</Button>
              <Button className="bg-slate-700 hover:bg-slate-600 text-white font-bold"><ArrowRight className="mr-2 h-4 w-4" /> Iniciar Sesión</Button>
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
              <Button className="bg-gray-800 text-white hover:bg-gray-700"><ArrowRight className="mr-2 h-4 w-4" />Iniciar Sesión Gratis</Button>
              <Button variant="outline" className="bg-white/30 border-gray-700 text-gray-800 hover:bg-white/50">Ver Ranking</Button>
           </div>
        </div>

        <section className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2">Prepárate para las oposiciones con nuestro sistema de tests inteligente que se adapta a tu nivel</h2>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3"><BookOpen className="h-8 w-8 text-blue-600" /></div>
                    <p className="text-3xl font-bold">8</p>
                    <p className="text-muted-foreground">Tests Disponibles</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full mb-3"><ListChecks className="h-8 w-8 text-green-600" /></div>
                    <p className="text-3xl font-bold">143</p>
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
                    <p className="text-3xl font-bold">0</p>
                    <p className="text-muted-foreground">Usuarios Compitiendo</p>
                </CardContent>
            </Card>
        </div>

        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2"><ListChecks className="h-5 w-5" /> Tests Disponibles</h3>
                <Badge variant="secondary">Modo Invitado</Badge>
            </div>
            <div className="flex gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Buscar tests..." className="pl-10" />
                </div>
                 <Select>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Todas las categorías" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="funcion-publica">Función Pública</SelectItem>
                        <SelectItem value="derecho-admin">Derecho Administrativo</SelectItem>
                        <SelectItem value="seg-social">Seguridad Social</SelectItem>
                    </SelectContent>
                </Select>
                 <Select>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Todas las dificultades" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="facil">Fácil</SelectItem>
                        <SelectItem value="medio">Medio</SelectItem>
                        <SelectItem value="dificil">Difícil</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTests.map((test, index) => (
                <Card key={index} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${test.iconBgColor}`}>
                                {test.icon}
                            </div>
                            <div>
                                <CardTitle className="text-lg mb-1">{test.title}</CardTitle>
                                <Badge className={`${test.difficultyColor} text-white`}>{test.difficulty}</Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground mb-4">{test.description}</p>
                        <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2"><ListChecks className="h-4 w-4"/> {test.questions} preguntas</div>
                            <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> {test.time} min</div>
                            <div className="flex items-center gap-2"><Target className="h-4 w-4"/> {test.points} pts</div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4">
                         <Badge variant="outline">{test.tag}</Badge>
                         <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">Comenzar Quiz</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

      </main>
    </div>
  );
}
