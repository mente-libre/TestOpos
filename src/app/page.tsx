'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileUp, Bot, BarChart3, Upload, User, LogOut, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { onAuthStateChange, signOut, type User as FirebaseUser } from '@/lib/firebase/auth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { processAndSaveExam } from '@/app/actions';
import { getExams, type Category } from '@/lib/firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
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
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const userRef = useRef(user);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (currentUser) => {
      if (currentUser?.uid !== userRef.current?.uid) {
        setUser(currentUser);
        if (currentUser) {
          const result = await getExams(currentUser);
          if (result.success && result.categories) {
            setCategories(result.categories);
          }
        } else {
          setCategories([]);
        }
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    
    setIsLoading(true);
    setQuestions(null);
    setError(null);

    try {
      const pdfDataUri = await fileToDataUri(selectedFile);
      const result = await processAndSaveExam(pdfDataUri, selectedFile.name, selectedCategory, user);

      if (result.success) {
        setQuestions(result.questions ?? []);
        setError(null);
        toast({
            title: '¡Examen guardado!',
            description: `Se ha guardado en "${CATEGORY_DEFINITIONS.find(c=>c.id === selectedCategory)?.name}".`,
        });
        // Recargar los exámenes y categorías
        if (user) {
            const examsResult = await getExams(user);
            if (examsResult.success && examsResult.categories) {
                setCategories(examsResult.categories);
            }
        }

      } else {
        setError(result.error ?? 'Ha ocurrido un error desconocido.');
        setQuestions(null);
      }
    } catch (e) {
      console.error(e);
      setError('No se pudo procesar el archivo. Inténtalo de nuevo.');
      setQuestions(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartTest = () => {
    if (questions) {
      sessionStorage.setItem('testQuestions', JSON.stringify(questions));
      router.push('/test');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">Opofy</div>
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">Inicio</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Exámenes</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Estadísticas</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Ayuda</a>
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
              Sube tus exámenes en PDF y genera tests personalizados para practicar. Mejora tu rendimiento con inteligencia artificial.
            </p>
            <Link href={user ? '#' : '/register'} passHref>
                <Button size="lg" onClick={() => user && document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  {user ? 'Empezar a subir' : 'Comenzar ahora'}
                </Button>
            </Link>
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

        <section id="upload-section" className="py-16 md:py-24 bg-light dark:bg-background">
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
                    <Button onClick={handleProcessExam} disabled={isLoading || !user}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isLoading ? 'Procesando...' : 'Procesar y Guardar'}
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
             {isLoading && (
                 <div className="flex justify-center items-center p-8">
                    <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                    <p>La IA está leyendo y guardando tu examen...</p>
                 </div>
             )}

            <h3 className="text-2xl font-bold mt-12 mb-6">Tus categorías</h3>
            {user ? (
                categories.length > 0 ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {categories.map(category => (
                            <Card key={category.id} className="hover:shadow-lg hover:-translate-y-1 transition-transform">
                                <div className="bg-primary text-primary-foreground font-semibold p-4 rounded-t-lg">
                                    {category.name}
                                </div>
                                <CardContent className="pt-6">
                                    <div className="text-4xl font-bold text-primary mb-2">{category.examCount}</div>
                                    <p className="text-muted-foreground">exámenes disponibles</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">Aún no has guardado ningún examen. ¡Sube uno para empezar!</p>
                )
            ) : (
                <p className="text-center text-muted-foreground">
                    <Link href="/login" className="text-primary underline">Inicia sesión</Link> para ver tus exámenes guardados.
                </p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-8 text-center mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p>© 2024 Opofy - Preparación inteligente para oposiciones</p>
            <p className="text-sm text-gray-400 mt-2">Una app segura y eficaz para tu preparación</p>
        </div>
      </footer>
    </div>
  );
}

    