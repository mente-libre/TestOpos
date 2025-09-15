
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileUp, Bot, BarChart3, Upload, User, LogOut, Loader2, AlertCircle, CheckCircle, Folder, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { onAuthStateChange, signOut } from '@/lib/firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { processAndSaveExam } from '@/app/actions';
import { getAllExamsGroupedByCategory, type Category, ensureSeedData } from '@/lib/firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/logo';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

// A plain object to store user info, safe for React state
interface AppUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

const CATEGORY_DEFINITIONS = [
    { id: "madrid", name: "Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [isProcessing, setIsProcessing] = useState(false);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const { toast } = useToast();
  const router = useRouter();

  // Effect for handling auth and data loading
  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);

      // Ensure seed data exists, then fetch categories.
      await ensureSeedData();
      const result = await getAllExamsGroupedByCategory();
      
      if (result.success && result.categories) {
        setCategories(result.categories);
      } else {
        console.error("Failed to fetch categories:", result.error);
        toast({
          variant: "destructive",
          title: "Error de Carga",
          description: result.error || "No se pudieron cargar las carpetas de exámenes.",
        });
      }

      setIsLoading(false);
    };

    loadInitialData();

    const unsubscribe = onAuthStateChange(async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const appUser: AppUser = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
        };
        setUser(appUser);
      } else {
        setUser(null);
      }
    });
    
    return () => unsubscribe();
  }, [toast]);

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type !== 'application/pdf') {
        toast({
          variant: 'destructive',
          title: 'Error en el archivo',
          description: 'Por favor, selecciona un archivo PDF.',
        });
        return;
      }
      setSelectedFile(file);
      setSelectedFileName(file.name);
      setQuestions(null);
      setError(null);
    }
  };
  
  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleProcessExam = async () => {
    if (!selectedFile) {
      setError('Por favor, selecciona un archivo PDF para procesar.');
      return;
    }
    if (!selectedCategory) {
      setError('Por favor, selecciona una categoría para el examen.');
      return;
    }
    if (!user) {
      setError('Debes iniciar sesión para guardar un examen.');
      return;
    }
    
    setIsProcessing(true);
    setQuestions(null);
    setError(null);

    try {
      const pdfDataUri = await fileToDataUri(selectedFile);
      const result = await processAndSaveExam(pdfDataUri, selectedFile.name, selectedCategory, user.uid);

      if (result.success && result.questions) {
        setQuestions(result.questions);
        setError(null);
        toast({
            title: '¡Examen guardado!',
            description: `Se ha guardado en "${CATEGORY_DEFINITIONS.find(c=>c.id === selectedCategory)?.name}".`,
        });
        // Recargar las categorías
        const examsResult = await getAllExamsGroupedByCategory();
        if (examsResult.success && examsResult.categories) {
            setCategories(examsResult.categories);
        }

      } else {
        // This is the crucial part: handle the error from the server action
        let errorMessage = result.error ?? 'Ha ocurrido un error desconocido durante el procesamiento.';
         if (errorMessage.includes('quota')) {
            errorMessage = 'Has excedido tu cuota de uso de la API. Por favor, espera un momento y vuelve a intentarlo.'
        }
        setError(errorMessage);
        setQuestions(null);
      }
    } catch (e: any) {
      console.error(e);
      let errorMessage = 'No se pudo procesar el archivo. Inténtalo de nuevo.';
      if (e.message && e.message.includes('quota')) {
        errorMessage = 'Has excedido la cuota de la API. Por favor, espera un momento y vuelve a intentarlo.'
      }
      setError(errorMessage);
      setQuestions(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStartTest = () => {
    if (questions) {
      sessionStorage.setItem('testQuestions', JSON.stringify(questions));
      sessionStorage.setItem('testTitle', 'Examen recién subido');
      router.push('/test');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Logo />
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#upload-section" className="text-secondary font-medium hover:text-primary transition-colors">Inicio</a>
              <Link href="/generate" className="text-secondary font-medium hover:text-primary transition-colors">Generador IA</Link>
              <a href="#upload-section" className="text-secondary font-medium hover:text-primary transition-colors">Exámenes</a>
              <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Estadísticas</a>
              <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Ayuda</a>
            </nav>
            <div className="flex items-center gap-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
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
                <>
                  <Link href="/login" passHref>
                    <Button variant="outline">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/register" passHref>
                    <Button>Registrarse</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prepara tus oposiciones con exámenes reales</h1>
            <p className="max-w-3xl mx-auto text-lg text-secondary mb-8">
              Sube tus PDFs o deja que nuestra IA genere nuevos tests para ti. La preparación más completa a tu alcance.
            </p>
             <div className="flex justify-center gap-4">
                <Link href={user ? '#upload-section' : '/register'} passHref>
                    <Button size="lg" onClick={() => user && document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}>
                      {user ? 'Empezar a subir' : 'Comenzar ahora'}
                    </Button>
                </Link>
                 <Link href="/generate" passHref>
                    <Button size="lg" variant="outline" className="bg-white">
                        <Wand2 className="mr-2 h-5 w-5 text-primary"/>
                        Generar con IA
                    </Button>
                </Link>
             </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <FileUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Sube tus exámenes</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Sube los PDFs de exámenes anteriores. Organízalos por categoría, comunidad o año.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">IA genera tests</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Nuestra IA analiza los documentos y crea tests personalizados con preguntas y respuestas.</p>
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

        <section id="upload-section" className="py-16 md:py-24 bg-light dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Tus exámenes</h2>
            
            <Card className="mb-12">
              <CardHeader>
                <h3 className="text-xl font-semibold">Subir nuevo examen</h3>
              </CardHeader>
              <CardContent>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors mb-6"
                  onClick={handleUploadAreaClick}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4"/>
                  <p className="text-muted-foreground">{selectedFileName ? `Archivo seleccionado: ${selectedFileName}` : 'Haz clic o arrastra aquí tu archivo PDF'}</p>
                  <input ref={fileInputRef} type="file" id="fileInput" accept=".pdf" className="hidden" onChange={handleFileChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 items-end">
                    <div>
                        <label htmlFor="examCategory" className="block text-sm font-medium text-gray-700 mb-1">Categoría:</label>
                        <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                            <SelectTrigger id="examCategory">
                                <SelectValue placeholder="Selecciona una categoría" />
                            </SelectTrigger>
                            <SelectContent>
                                {CATEGORY_DEFINITIONS.map(cat => (
                                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button onClick={handleProcessExam} disabled={isProcessing || !user}>
                      {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isProcessing ? 'Procesando...' : 'Procesar y Guardar'}
                    </Button>
                </div>
              </CardContent>
            </Card>

            {error && (
              <Alert variant="destructive" className="mb-8">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {questions && questions.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <h3 className="text-xl font-semibold">Preguntas Extraídas</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Se han extraído {questions.length} preguntas. ¡Ya puedes comenzar el test!</p>
                  <ul className="list-decimal list-inside space-y-2 mb-6 text-sm">
                    {questions.slice(0, 5).map((q, index) => <li key={index}>{q.questionText}</li>)}
                    {questions.length > 5 && <li className="text-muted-foreground">... y {questions.length - 5} más.</li>}
                  </ul>
                  <Button onClick={handleStartTest}>Comenzar Test</Button>
                </CardContent>
              </Card>
            )}
             {isProcessing && (
                 <div className="flex justify-center items-center p-8">
                    <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                    <p>La IA está leyendo y guardando tu examen...</p>
                 </div>
             )}

            <h3 className="text-2xl font-bold mt-12 mb-6">Tus carpetas de exámenes</h3>
            {isLoading ? (
              <div className="flex justify-center items-center p-8">
                  <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                  <p>Cargando tus datos...</p>
              </div>
            ) : (
                categories.length > 0 ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    <p className="text-center text-muted-foreground">Aún no hay exámenes disponibles. ¡Sube uno para empezar!</p>
                )
            )}
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
